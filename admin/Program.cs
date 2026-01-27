using Microsoft.AspNetCore.Mvc.Formatters;
using Admin.Helpers;
using Admin.Models;

var builder = WebApplication.CreateBuilder(args);
// 1 GB
builder.WebHost.ConfigureKestrel(options => options.Limits.MaxRequestBodySize = 1000000000);

// Add services to the container.

builder.Services
    .AddControllers(options =>
    {
        // do not throw error on request when some data is missing, (implicit [Required])
        options.SuppressImplicitRequiredAttributeForNonNullableReferenceTypes = true;
        // allow to return null from requests
        options.OutputFormatters.RemoveType<HttpNoContentOutputFormatter>();
    });

// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();
builder.Services.AddCors(policyBuilder =>
    policyBuilder.AddDefaultPolicy(policy =>
        policy.WithOrigins("http://localhost:3000").AllowAnyHeader().AllowAnyMethod().AllowCredentials())
);

var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();

app.UseAuthorization();

app.MapControllers();
app.UseCors();

void Init()
{
    FolderHelper.SetImagePaths(Folder.FoldersTree);

    Folder.FoldersFlat = FolderHelper.FlattenFolders(Folder.FoldersTree);
    Folder.ImagesFlat = FolderHelper.FlattenImages(Folder.FoldersFlat);
    Folder.ImagesSectionsFlat = FolderHelper.FlattenImagesSections(Folder.FoldersFlat);

    FolderHelper.WriteTypescriptFile(Folder.ImagesSectionsFlat);
}

Init();


app.Run();

