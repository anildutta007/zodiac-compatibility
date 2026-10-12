@echo off
title Push ZodiacMatch AI to GitHub
cd /d "%~dp0"
echo ========================================================
echo        Pushing ZodiacMatch AI to GitHub
echo ========================================================
echo.
echo Remote target: https://github.com/anildutta007/zodiac-compatibility.git
echo.

git init -b main 2>nul
git add .
git commit -m "Initial commit: ZodiacMatch AI - Sun Sign & Couple Compatibility Matrix" 2>nul
git branch -M main

git remote get-url origin >nul 2>nul
if errorlevel 1 (
    git remote add origin https://github.com/anildutta007/zodiac-compatibility.git
) else (
    git remote set-url origin https://github.com/anildutta007/zodiac-compatibility.git
)

git push -u origin main
if errorlevel 1 (
    echo.
    echo ========================================================
    echo [ACTION REQUIRED ON GITHUB]
    echo 1. Open your browser and go to: https://github.com/new
    echo 2. Repository name: zodiac-compatibility
    echo 3. Keep it Public (or Private)
    echo 4. Leave "Add a README file" UNCHECKED (keep repo empty)
    echo 5. Click "Create repository"
    echo 6. Run this push_to_github.bat script again!
    echo ========================================================
) else (
    echo.
    echo ========================================================
    echo  SUCCESS! Your code has been pushed to GitHub:
    echo  https://github.com/anildutta007/zodiac-compatibility
    echo ========================================================
)
pause
