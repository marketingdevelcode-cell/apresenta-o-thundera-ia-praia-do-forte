Add-Type -AssemblyName System.Drawing
$img = [System.Drawing.Image]::FromFile("assets/Gemini_Generated_Image_gdqfmfgdqfmfgdqf 1.png")
$width = 1920
$height = [int]($img.Height * ($width / $img.Width))
$bmp = New-Object System.Drawing.Bitmap($img, $width, $height)
$bmp.Save("assets/bg-optimized.jpg", [System.Drawing.Imaging.ImageFormat]::Jpeg)
$bmp.Dispose()
$img.Dispose()
