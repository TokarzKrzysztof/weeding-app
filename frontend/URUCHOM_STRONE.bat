@echo off

git checkout master
git pull
echo Starting React app...
start cmd /k "npm start"

cd ../SaraAdmin
git checkout main
git pull
echo Starting .NET backend...
start cmd /k "dotnet run"

echo Both applications started.