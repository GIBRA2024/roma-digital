function descargarContacto() {
    const vcardData = `BEGIN:VCARD
VERSION:3.0
FN:Claudia Vacca
TEL:+57 3155714240
EMAIL: clvacca@gmail.com
NOTE: Bon Vivant
END:VCARD`;

    const blob = new Blob([vcardData], { type: 'text/vcard' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'contacto.vcf';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
}
