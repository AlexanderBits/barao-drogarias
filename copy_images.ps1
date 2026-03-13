$srcBase = "C:\Users\assvi\.gemini\antigravity\brain\3b95aeee-98de-4b7c-a7dc-27574a141969"
$destBase = "C:\Users\assvi\Desktop\SITES ANTIGRAVITY\DROGARIAS BARÃO\public\products"

if (!(Test-Path $destBase)) { New-Item -ItemType Directory -Path $destBase -Force }

$mapping = @{
    "media__1773400164526.png" = "nasoar.png";
    "media__1773400200799.png" = "paracetamol.png";
    "media__1773400292838.png" = "stilgrip.png";
    "media__1773400336547.png" = "propolis.png";
    "media__1773400408605.png" = "dorflex.png";
    "media__1773401091676.png" = "neosoro.png"
}

foreach ($srcFile in $mapping.Keys) {
    $srcPath = Join-Path $srcBase $srcFile
    $destPath = Join-Path $destBase $mapping[$srcFile]
    if (Test-Path $srcPath) {
        Copy-Item -Path $srcPath -Destination $destPath -Force
        Write-Host "Copiado: $srcFile -> $($mapping[$srcFile])"
    } else {
        Write-Host "Não encontrado: $srcPath"
    }
}
