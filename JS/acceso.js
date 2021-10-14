function Ingresar()
{
    var usuario="enrique";
    var contraseña="examen";

if (document.frmingreso.txtusuario.value==usuario &&
    document.frmingreso.txtcontraseña.value==contraseña)
    {
        document.location="html/INI.html"
    }
    else
    {
        alert("ussuario o contraseña incorrrecta, ingrese los datos correctos")
    }

    }