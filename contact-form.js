(() => {
  const form = document.querySelector('[data-contact-form]');
  if (!form) return;

  const status = form.querySelector('[data-contact-status]');
  form.addEventListener('submit', event => {
    event.preventDefault();
    if (!form.reportValidity()) return;

    const data = new FormData(form);
    const value = name => String(data.get(name) || '').trim();
    const subject = `Projet / collaboration — ${value('nom') || 'Nouvelle demande'}`;
    const lines = [
      'Bonjour William,',
      '',
      value('message'),
      '',
      '—',
      `Nom : ${value('nom')}`,
      `Société : ${value('societe') || 'Non renseignée'}`,
      `E-mail : ${value('email')}`,
      `Téléphone : ${value('telephone') || 'Non renseigné'}`,
      `Type de projet : ${value('projet') || 'À préciser'}`
    ];
    const href = 'mailto:william_rigoulet@hotmail.com?subject=' +
      encodeURIComponent(subject) + '&body=' + encodeURIComponent(lines.join('\n'));

    status.textContent = 'Votre application de messagerie va s’ouvrir avec le message préparé.';
    window.location.href = href;
  });
})();
