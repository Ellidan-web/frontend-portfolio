// scripts/email.js
// EmailJS integration for contact form
class EmailService {
    constructor() {
        this.form = document.getElementById('contact-form');
        this.submitBtn = this.form?.querySelector('.form__submit');
        this.successMessage = this.form?.querySelector('.form__message--success');
        this.errorMessage = this.form?.querySelector('.form__message--error');
        
        this.init();
    }
    
    init() {
        if (this.form) {
            this.initEmailJS();
            this.initFormValidation();
            this.initFormSubmission();
        }
    }
    
    initEmailJS() {
        // Initialize EmailJS with your public key
        emailjs.init("YOUR_PUBLIC_KEY"); // Replace with your actual public key
    }
    
    initFormValidation() {
        const inputs = this.form.querySelectorAll('.form__input, .form__textarea');
        
        inputs.forEach(input => {
            input.addEventListener('blur', () => {
                this.validateField(input);
            });
            
            input.addEventListener('input', () => {
                this.clearFieldError(input);
            });
        });
    }
    
    validateField(field) {
        const value = field.value.trim();
        const errorElement = field.nextElementSibling;
        
        if (field.type === 'email') {
            if (!this.isValidEmail(value)) {
                this.showFieldError(field, 'Please enter a valid email address');
                return false;
            }
        }
        
        if (field.required && !value) {
            this.showFieldError(field, 'This field is required');
            return false;
        }
        
        this.clearFieldError(field);
        return true;
    }
    
    isValidEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }
    
    showFieldError(field, message) {
        field.classList.add('error');
        const errorElement = field.nextElementSibling;
        if (errorElement && errorElement.classList.contains('form__error')) {
            errorElement.textContent = message;
            errorElement.style.display = 'block';
        }
    }
    
    clearFieldError(field) {
        field.classList.remove('error');
        const errorElement = field.nextElementSibling;
        if (errorElement && errorElement.classList.contains('form__error')) {
            errorElement.textContent = '';
            errorElement.style.display = 'none';
        }
    }
    
    initFormSubmission() {
        this.form.addEventListener('submit', async (e) => {
            e.preventDefault();
            
            if (this.validateForm()) {
                await this.sendEmail();
            }
        });
    }
    
    validateForm() {
        const inputs = this.form.querySelectorAll('.form__input, .form__textarea');
        let isValid = true;
        
        inputs.forEach(input => {
            if (!this.validateField(input)) {
                isValid = false;
            }
        });
        
        return isValid;
    }
    
    async sendEmail() {
        this.setLoadingState(true);
        this.hideMessages();
        
        try {
            const formData = new FormData(this.form);
            
            // Send email using EmailJS
            const response = await emailjs.send(
                'YOUR_SERVICE_ID', // Replace with your service ID
                'YOUR_TEMPLATE_ID', // Replace with your template ID
                {
                    from_name: formData.get('name'),
                    from_email: formData.get('email'),
                    message: formData.get('message')
                }
            );
            
            if (response.status === 200) {
                this.showSuccess('Message sent successfully!');
                this.form.reset();
            } else {
                throw new Error('Failed to send message');
            }
        } catch (error) {
            console.error('Email sending error:', error);
            this.showError('Failed to send message. Please try again.');
        } finally {
            this.setLoadingState(false);
        }
    }
    
    setLoadingState(loading) {
        if (this.submitBtn) {
            const btnText = this.submitBtn.querySelector('.btn__text');
            const btnLoading = this.submitBtn.querySelector('.btn__loading');
            
            if (loading) {
                this.submitBtn.disabled = true;
                btnText.style.opacity = '0';
                btnLoading.style.display = 'flex';
            } else {
                this.submitBtn.disabled = false;
                btnText.style.opacity = '1';
                btnLoading.style.display = 'none';
            }
        }
    }
    
    showSuccess(message) {
        if (this.successMessage) {
            this.successMessage.textContent = message;
            this.successMessage.style.display = 'flex';
            setTimeout(() => {
                this.hideMessages();
            }, 5000);
        }
    }
    
    showError(message) {
        if (this.errorMessage) {
            this.errorMessage.textContent = message;
            this.errorMessage.style.display = 'flex';
        }
    }
    
    hideMessages() {
        if (this.successMessage) {
            this.successMessage.style.display = 'none';
        }
        if (this.errorMessage) {
            this.errorMessage.style.display = 'none';
        }
    }
}

// Initialize email service
document.addEventListener('DOMContentLoaded', () => {
    new EmailService();
});