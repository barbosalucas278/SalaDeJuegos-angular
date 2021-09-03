export class Utilidades {
  static renderNavBarLinks(hasLoggedOn: boolean) {
    const selnavbarLinkPerfil = document.getElementById('navbar-link-perfil');
    const selnavbarLinkLogout = document.getElementById('navbar-link-logout');
    const selnavbarLinkSingIn = document.getElementById('navbar-link-singIn');
    const selnavbarLinkLogin = document.getElementById('navbar-link-login');
    if (hasLoggedOn) {
      selnavbarLinkPerfil?.classList.remove('visually-hidden');
      selnavbarLinkLogout?.classList.remove('visually-hidden');
      selnavbarLinkSingIn?.classList.add('visually-hidden');
      selnavbarLinkLogin?.classList.add('visually-hidden');
    } else {
      selnavbarLinkPerfil?.classList.add('visually-hidden');
      selnavbarLinkLogout?.classList.add('visually-hidden');
      selnavbarLinkSingIn?.classList.remove('visually-hidden');
      selnavbarLinkLogin?.classList.remove('visually-hidden');
    }
  }
}
