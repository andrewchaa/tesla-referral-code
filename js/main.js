document.addEventListener('DOMContentLoaded', function() {
    const copyBtn = document.getElementById('copy-btn');
    const referralLink = document.getElementById('referral-link');
    
    if (copyBtn && referralLink) {
        copyBtn.addEventListener('click', function() {
            const linkText = referralLink.innerText;
            
            navigator.clipboard.writeText(linkText).then(function() {
                const originalContent = copyBtn.innerHTML;
                copyBtn.innerHTML = `
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#4CAF50" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                    <span style="color: #4CAF50; font-weight: bold;">Copied!</span>
                `;
                
                setTimeout(function() {
                    copyBtn.innerHTML = originalContent;
                }, 2000);
            }).catch(function(err) {
                console.error('Could not copy text: ', err);
                const textArea = document.createElement("textarea");
                textArea.value = linkText;
                document.body.appendChild(textArea);
                textArea.select();
                try {
                    document.execCommand('copy');
                    copyBtn.innerHTML = '<span style="color: #4CAF50;">Copied!</span>';
                    setTimeout(() => {
                        copyBtn.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="copy-icon"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path></svg><span class="btn-text">Copy</span>';
                    }, 2000);
                } catch (err) {
                    console.error('Fallback: Oops, unable to copy', err);
                }
                document.body.removeChild(textArea);
            });
        });
    }

    const accordionHeaders = document.querySelectorAll('.accordion-header');
    
    accordionHeaders.forEach(header => {
        header.addEventListener('click', function() {
            const content = this.nextElementSibling;
            const expanded = this.getAttribute('aria-expanded') === 'true';
            
            this.setAttribute('aria-expanded', !expanded);
            
            if (!expanded) {
                content.style.maxHeight = content.scrollHeight + "px";
            } else {
                content.style.maxHeight = null;
            }
        });
    });

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });
});
