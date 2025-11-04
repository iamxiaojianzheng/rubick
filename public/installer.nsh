!macro customInstall
   SetRegView 64
   WriteRegStr HKCR "*\shell\ruck" "" "open w&ith ruck"
   WriteRegStr HKCR "*\shell\ruck" "Icon" "$INSTDIR\ruck.exe"
   WriteRegStr HKCR "*\shell\ruck\command" "" '"$INSTDIR\ruck.exe" "search" "%1"'
   SetRegView 32
   WriteRegStr HKCR "*\shell\ruck" "" "open w&ith ruck"
   WriteRegStr HKCR "*\shell\ruck" "Icon" "$INSTDIR\ruck.exe"
   WriteRegStr HKCR "*\shell\ruck\command" "" '"$INSTDIR\ruck.exe" "search" "%1"'
!macroend
!macro customUninstall
   DeleteRegKey HKCR "*\shell\ruck"
!macroend
