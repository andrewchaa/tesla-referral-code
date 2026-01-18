#!/bin/bash

if command -v python3 &>/dev/null; then
    echo "🚀 Starting local server at http://localhost:8000"
    echo "Press Ctrl+C to stop the server"
    open "http://localhost:8000" 2>/dev/null || xdg-open "http://localhost:8000" 2>/dev/null || echo "Please open http://localhost:8000 in your browser"
    python3 -m http.server 8000
elif command -v python &>/dev/null; then
    echo "🚀 Starting local server at http://localhost:8000"
    echo "Press Ctrl+C to stop the server"
    open "http://localhost:8000" 2>/dev/null || xdg-open "http://localhost:8000" 2>/dev/null || echo "Please open http://localhost:8000 in your browser"
    python -m SimpleHTTPServer 8000
else
    echo "❌ Python not found. Please install Python to use this script, or simply open index.html directly in your browser."
    exit 1
fi
