(() => {
  const form = document.querySelector('[data-contact-form]');
  if (!form) return;

  const english = document.documentElement.lang === 'en';
  const status = form.querySelector('[data-contact-status]');
  form.addEventListener('submit', event => {
    event.preventDefault();
    if (!form.reportValidity()) return;

    const data = new FormData(form);
    const value = name => String(data.get(name) || '').trim();
    const subject = english
      ? `Project enquiry — ${value('nom') || 'New enquiry'}`
      : `Projet / collaboration — ${value('nom') || 'Nouvelle demande'}`;
    const lines = [
      english ? 'Hello William,' : 'Bonjour William,',
      '',
      value('message'),
      '',
      '—',
      `${english ? 'Name:' : 'Nom :'} ${value('nom')}`,
      `${english ? 'Company:' : 'Société :'} ${value('societe') || (english ? 'Not provided' : 'Non renseignée')}`,
      `${english ? 'Email:' : 'E-mail :'} ${value('email')}`,
      `${english ? 'Phone:' : 'Téléphone :'} ${value('telephone') || (english ? 'Not provided' : 'Non renseigné')}`,
      `${english ? 'Project type:' : 'Type de projet :'} ${value('projet') || (english ? 'To be discussed' : 'À préciser')}`
    ];
    const href = 'mailto:william_rigoulet@hotmail.com?subject=' +
      encodeURIComponent(subject) + '&body=' + encodeURIComponent(lines.join('\n'));

    status.textContent = english
      ? 'Your email app will open with the prepared message.'
      : 'Votre application de messagerie va s’ouvrir avec le message préparé.';
    window.location.href = href;
  });
})();
