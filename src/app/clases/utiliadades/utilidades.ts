export class Utilidades {
  static moverLogoStartLeft() {
    const selRowLogo = document.getElementById('rowLogoLayout');
    const selTituloLayout = document.getElementById('tituloLayout');
    const widthMinimo = 768;

    if (window.innerWidth > widthMinimo) {
        selTituloLayout?.classList.remove('visually-hidden');
    } else {
        selTituloLayout?.classList.add('visually-hidden');
    }
  }
}
