@echo off
title Anil Dutta - ZodiacMatch AI Compatibility Platform
echo ==============================================================
echo        Starting Anil Dutta ZodiacMatch AI...
echo        Sun Sign & Couple Compatibility Matrix
echo ==============================================================
echo.
cd /d "%~dp0"

set "PATH=%LOCALAPPDATA%\Python\bin;%LOCALAPPDATA%\Programs\Python\Python312;%LOCALAPPDATA%\Programs\Python\Python313;%LOCALAPPDATA%\Programs\Python\Python314;%PATH%"

python server.py

if errorlevel 1 (
    py server.py
)

if errorlevel 1 (
    echo.
    echo Launching index.html directly in default browser...
    start "" "%~dp0index.html"
)
pause
