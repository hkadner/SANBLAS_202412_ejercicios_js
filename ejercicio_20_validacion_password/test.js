/*
Longitud mínima de 8 caracteres
Contiene una letra mayúcula
Contiene una letra minúscula
Contiene un dígito numérico
Contiene un carácter # ó $
*/
let regexp = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[#\$])[A-Za-z\d#$]{8,}$/
let password = '$patAta893'
console.log(password.match(regexp));