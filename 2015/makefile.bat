@echo off
@setlocal

g++ -std=c++11 -o main %*
main.exe
del main.exe
