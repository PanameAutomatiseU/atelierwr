(() => {
  const form = document.querySelector('[data-contact-form]');
  if (!form) return;

  const status = form.querySelector('[data-contact-status]');
  form.addEventListener('submit', event => {
    event.preventDefault();
    if (!form.reportValidity()) return;

    const data = new FormData(form);
    const value = name => String(data.get(name) || '').trim();
    const subject = `Project enquiry — ${value('nom') || 'New enquiry'}`;
    const lines = [
      'Hello William,',
      '',
      value('message'),
      '',
      '—',
      `Name: ${value('nom')}`,
      `Company: ${value('societe') || 'Not provided'}`,
      `Email: ${value('email')}`,
      `Phone: ${value('telephone') || 'Not provided'}`,
      `Project type: ${value('projet') || 'To be discussed'}`
    ];
    const href = 'mailto:william_rigoulet@hotmail.com?subject=' +
      encodeURIComponent(subject) + '&body=' + encodeURIComponent(lines.join('\n'));

    status.textContent = 'Your email app will open with the prepared message.';
    window.location.href = href;
  });
})();
