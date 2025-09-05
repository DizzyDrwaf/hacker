document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('pre > code').forEach(codeBlock => {
    const wrapper = document.createElement('div');
    wrapper.className = 'code-wrapper';

    const button = document.createElement('button');
    button.className = 'copy-btn';
    button.innerText = 'Copy';

    // Wrap the code block
    const pre = codeBlock.parentNode;
    pre.parentNode.replaceChild(wrapper, pre);
    wrapper.appendChild(button);
    wrapper.appendChild(pre);

    // Copy functionality
    button.addEventListener('click', () => {
      navigator.clipboard.writeText(codeBlock.innerText).then(() => {
        button.innerText = 'Copied!';
        setTimeout(() => button.innerText = 'Copy', 2000);
      }).catch(err => console.error('Failed to copy!', err));
    });
  });
});
