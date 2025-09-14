// Addapt Application JavaScript
class AddaptApp {
    constructor() {
        this.currentLanguage = 'en';
        this.campaigns = [];
        this.currentPage = 'landing-page';
        this.performanceChart = null;
        
        this.translations = {
            en: {
                'Create Marketing Campaigns with Natural Language': 'Create Marketing Campaigns with Natural Language',
                'Simply describe your campaign goals in plain English or Hindi, and let our AI create optimized campaigns for you.': 'Simply describe your campaign goals in plain English or Hindi, and let our AI create optimized campaigns for you.',
                'Try Addapt Free': 'Try Addapt Free',
                'Why Choose Addapt?': 'Why Choose Addapt?',
                'AI-Powered': 'AI-Powered',
                'Advanced natural language processing understands your campaign goals': 'Advanced natural language processing understands your campaign goals',
                'Real-time Analytics': 'Real-time Analytics',
                'Track performance and optimize campaigns with live data insights': 'Track performance and optimize campaigns with live data insights',
                'Bilingual Support': 'Bilingual Support',
                'Create campaigns in English or Hindi with seamless translation': 'Create campaigns in English or Hindi with seamless translation',
                '← Back': '← Back',
                'Describe Your Campaign': 'Describe Your Campaign',
                'Tell us about your marketing goals in natural language': 'Tell us about your marketing goals in natural language',
                'Hi! I\'m here to help you create your campaign. You can describe your needs like: \'Daily budget of 900 for 7 weeks\' or \'Cafe in Mumbai, 500 rupees per day for 1 month\'': 'Hi! I\'m here to help you create your campaign. You can describe your needs like: \'Daily budget of 900 for 7 weeks\' or \'Cafe in Mumbai, 500 rupees per day for 1 month\'',
                'Describe your campaign...': 'Describe your campaign...',
                'Send': 'Send',
                'Review & Edit Campaign Details': 'Review & Edit Campaign Details',
                'Modify any details below before creating your campaign': 'Modify any details below before creating your campaign',
                'Campaign Name': 'Campaign Name',
                'Business Type': 'Business Type',
                'Location': 'Location',
                'Daily Budget (₹)': 'Daily Budget (₹)',
                'Duration (Days)': 'Duration (Days)',
                'Total Budget': 'Total Budget',
                'Create Campaign': 'Create Campaign',
                'New Campaign': 'New Campaign',
                'Campaign Dashboard': 'Campaign Dashboard',
                'Monitor your campaign performance and analytics': 'Monitor your campaign performance and analytics',
                'Active Campaigns': 'Active Campaigns',
                'Total Spend': 'Total Spend',
                'Impressions': 'Impressions',
                'Click Rate': 'Click Rate',
                'Campaign Performance': 'Campaign Performance',
                'Your Campaigns': 'Your Campaigns',
                'No campaigns yet. Create your first campaign!': 'No campaigns yet. Create your first campaign!',
                'Analytics Assistant': 'Analytics Assistant',
                'Ask questions about your campaign metrics': 'Ask questions about your campaign metrics',
                'Hello! I can help you understand your campaign metrics. Try asking: "How many campaigns do I have?" or "What\'s my total spend?"': 'Hello! I can help you understand your campaign metrics. Try asking: "How many campaigns do I have?" or "What\'s my total spend?"',
                'Ask about your metrics...': 'Ask about your metrics...'
            },
            hi: {
                'Create Marketing Campaigns with Natural Language': 'प्राकृतिक भाषा के साथ मार्केटिंग अभियान बनाएं',
                'Simply describe your campaign goals in plain English or Hindi, and let our AI create optimized campaigns for you.': 'बस अपने अभियान के लक्ष्यों को साधारण अंग्रेजी या हिंदी में बताएं, और हमारे AI को आपके लिए अनुकूलित अभियान बनाने दें।',
                'Try Addapt Free': 'Addapt मुफ्त में आज़माएं',
                'Why Choose Addapt?': 'Addapt क्यों चुनें?',
                'AI-Powered': 'AI-संचालित',
                'Advanced natural language processing understands your campaign goals': 'उन्नत प्राकृतिक भाषा प्रसंस्करण आपके अभियान के लक्ष्यों को समझता है',
                'Real-time Analytics': 'रियल-टाइम एनालिटिक्स',
                'Track performance and optimize campaigns with live data insights': 'लाइव डेटा अंतर्दृष्टि के साथ प्रदर्शन को ट्रैक करें और अभियानों को अनुकूलित करें',
                'Bilingual Support': 'द्विभाषी समर्थन',
                'Create campaigns in English or Hindi with seamless translation': 'निर्बाध अनुवाद के साथ अंग्रेजी या हिंदी में अभियान बनाएं',
                '← Back': '← वापस',
                'Describe Your Campaign': 'अपने अभियान का वर्णन करें',
                'Tell us about your marketing goals in natural language': 'प्राकृतिक भाषा में हमें अपने मार्केटिंग लक्ष्यों के बारे में बताएं',
                'Hi! I\'m here to help you create your campaign. You can describe your needs like: \'Daily budget of 900 for 7 weeks\' or \'Cafe in Mumbai, 500 rupees per day for 1 month\'': 'नमस्ते! मैं आपके अभियान बनाने में मदद करने के लिए यहाँ हूँ। आप अपनी आवश्यकताओं का वर्णन कर सकते हैं जैसे: \'7 सप्ताह के लिए दैनिक बजट 900\' या \'मुंबई में कैफे, 1 महीने के लिए प्रति दिन 500 रुपये\'',
                'Describe your campaign...': 'अपने अभियान का वर्णन करें...',
                'Send': 'भेजें',
                'Review & Edit Campaign Details': 'अभियान विवरण की समीक्षा और संपादन करें',
                'Modify any details below before creating your campaign': 'अपना अभियान बनाने से पहले नीचे दिए गए किसी भी विवरण को संशोधित करें',
                'Campaign Name': 'अभियान का नाम',
                'Business Type': 'व्यवसाय प्रकार',
                'Location': 'स्थान',
                'Daily Budget (₹)': 'दैनिक बजट (₹)',
                'Duration (Days)': 'अवधि (दिन)',
                'Total Budget': 'कुल बजट',
                'Create Campaign': 'अभियान बनाएं',
                'New Campaign': 'नया अभियान',
                'Campaign Dashboard': 'अभियान डैशबोर्ड',
                'Monitor your campaign performance and analytics': 'अपने अभियान के प्रदर्शन और एनालिटिक्स पर नज़र रखें',
                'Active Campaigns': 'सक्रिय अभियान',
                'Total Spend': 'कुल खर्च',
                'Impressions': 'इंप्रेशन',
                'Click Rate': 'क्लिक दर',
                'Campaign Performance': 'अभियान प्रदर्शन',
                'Your Campaigns': 'आपके अभियान',
                'No campaigns yet. Create your first campaign!': 'अभी तक कोई अभियान नहीं। अपना पहला अभियान बनाएं!',
                'Analytics Assistant': 'एनालिटिक्स सहायक',
                'Ask questions about your campaign metrics': 'अपने अभियान मेट्रिक्स के बारे में प्रश्न पूछें',
                'Hello! I can help you understand your campaign metrics. Try asking: "How many campaigns do I have?" or "What\'s my total spend?"': 'नमस्ते! मैं आपके अभियान मेट्रिक्स को समझने में मदद कर सकता हूँ। पूछने की कोशिश करें: \'मेरे पास कितने अभियान हैं?\' या \'मेरा कुल खर्च क्या है?\'',
                'Ask about your metrics...': 'अपने मेट्रिक्स के बारे में पूछें...'
            }
        };

        this.init();
    }

    init() {
        this.setupEventListeners();
        this.loadStoredData();
        this.showPage('landing-page');
        this.updateLanguage();
    }

    setupEventListeners() {
        // Navigation
        document.getElementById('try-free-btn')?.addEventListener('click', () => this.showPage('campaign-setup'));
        document.getElementById('back-to-landing')?.addEventListener('click', () => this.showPage('landing-page'));
        document.getElementById('new-campaign-btn')?.addEventListener('click', () => this.showPage('campaign-setup'));

        // Language toggles
        document.getElementById('language-toggle')?.addEventListener('click', () => this.toggleLanguage());
        document.getElementById('language-toggle-setup')?.addEventListener('click', () => this.toggleLanguage());
        document.getElementById('language-toggle-dashboard')?.addEventListener('click', () => this.toggleLanguage());

        // Chat functionality
        document.getElementById('send-message')?.addEventListener('click', () => this.sendMessage());
        document.getElementById('chat-input')?.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') this.sendMessage();
        });

        // Form functionality
        document.getElementById('daily-budget')?.addEventListener('input', () => this.updateTotalBudget());
        document.getElementById('duration')?.addEventListener('input', () => this.updateTotalBudget());
        document.getElementById('campaign-name')?.addEventListener('input', () => this.validateForm());
        document.getElementById('business-type')?.addEventListener('input', () => this.validateForm());
        document.getElementById('location')?.addEventListener('input', () => this.validateForm());

        // Campaign creation
        document.getElementById('create-campaign-btn')?.addEventListener('click', () => this.createCampaign());

        // Chatbot functionality
        document.getElementById('send-chatbot-message')?.addEventListener('click', () => this.sendChatbotMessage());
        document.getElementById('chatbot-input')?.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') this.sendChatbotMessage();
        });
    }

    showPage(pageId) {
        // Hide all pages
        document.querySelectorAll('.page').forEach(page => {
            page.classList.remove('active');
        });

        // Show target page
        const targetPage = document.getElementById(pageId);
        if (targetPage) {
            targetPage.classList.add('active');
            this.currentPage = pageId;

            // Initialize page-specific functionality
            if (pageId === 'dashboard') {
                this.initDashboard();
            } else if (pageId === 'campaign-setup') {
                this.resetCampaignForm();
            }
        }
    }

    toggleLanguage() {
        this.currentLanguage = this.currentLanguage === 'en' ? 'hi' : 'en';
        this.updateLanguage();
    }

    updateLanguage() {
        // Update language toggle buttons
        document.querySelectorAll('[data-lang]').forEach(btn => {
            const langText = btn.querySelector('.lang-text');
            if (langText) {
                langText.textContent = this.currentLanguage === 'en' ? 'हिंदी' : 'English';
            }
        });

        // Update all translatable elements
        document.querySelectorAll(`[data-${this.currentLanguage}]`).forEach(element => {
            const text = element.getAttribute(`data-${this.currentLanguage}`);
            if (text) {
                element.textContent = text;
            }
        });

        // Update placeholders
        document.querySelectorAll(`[data-placeholder-${this.currentLanguage}]`).forEach(element => {
            const placeholder = element.getAttribute(`data-placeholder-${this.currentLanguage}`);
            if (placeholder) {
                element.placeholder = placeholder;
            }
        });
    }

    sendMessage() {
        const input = document.getElementById('chat-input');
        const message = input.value.trim();
        
        if (!message) return;

        // Add user message
        this.addChatMessage(message, 'user');
        input.value = '';

        // Process with NLP
        setTimeout(() => {
            const extractedData = this.extractCampaignData(message);
            this.showExtractedData(extractedData);
        }, 1000);
    }

    addChatMessage(message, sender) {
        const messagesContainer = document.getElementById('chat-messages');
        const messageDiv = document.createElement('div');
        messageDiv.className = `message ${sender}-message fade-in`;
        
        const contentDiv = document.createElement('div');
        contentDiv.className = 'message-content';
        contentDiv.textContent = message;
        
        messageDiv.appendChild(contentDiv);
        messagesContainer.appendChild(messageDiv);
        messagesContainer.scrollTop = messagesContainer.scrollHeight;
    }

    extractCampaignData(message) {
        const data = {
            campaignName: 'My Campaign',
            businessType: '',
            location: '',
            dailyBudget: 500,
            duration: 30,
            totalBudget: 15000
        };

        // Enhanced NLP parsing
        const lowerMessage = message.toLowerCase();

        // Extract business type
        const businessTypes = ['cafe', 'restaurant', 'shop', 'store', 'salon', 'gym', 'hotel', 'clinic'];
        for (const type of businessTypes) {
            if (lowerMessage.includes(type)) {
                data.businessType = type.charAt(0).toUpperCase() + type.slice(1);
                break;
            }
        }

        // Extract location
        const cities = ['mumbai', 'delhi', 'bangalore', 'chennai', 'kolkata', 'pune', 'hyderabad', 'ahmedabad'];
        for (const city of cities) {
            if (lowerMessage.includes(city)) {
                data.location = city.charAt(0).toUpperCase() + city.slice(1);
                break;
            }
        }

        // Extract budget - handle "daily budget of X"
        const dailyBudgetMatch = message.match(/daily\s+budget\s+of\s+(\d+)/i) ||
                                message.match(/(\d+)\s+rupees?\s+per\s+day/i) ||
                                message.match(/(\d+)\s+daily/i);
        
        if (dailyBudgetMatch) {
            data.dailyBudget = parseInt(dailyBudgetMatch[1]);
        }

        // Extract duration - handle weeks/months
        let durationDays = 30;
        
        const weekMatch = message.match(/(\d+)\s+weeks?/i);
        const monthMatch = message.match(/(\d+)\s+months?/i);
        const dayMatch = message.match(/(\d+)\s+days?/i);
        
        if (weekMatch) {
            durationDays = parseInt(weekMatch[1]) * 7;
        } else if (monthMatch) {
            durationDays = parseInt(monthMatch[1]) * 30;
        } else if (dayMatch) {
            durationDays = parseInt(dayMatch[1]);
        }
        
        data.duration = durationDays;
        data.totalBudget = data.dailyBudget * data.duration;

        return data;
    }

    showExtractedData(data) {
        // Show bot response
        const responseMessage = this.currentLanguage === 'en' 
            ? `Great! I've extracted your campaign details. Please review and edit if needed.`
            : `बेहतरीन! मैंने आपके अभियान के विवरण निकाले हैं। कृपया समीक्षा करें और यदि आवश्यक हो तो संपादित करें।`;
        
        this.addChatMessage(responseMessage, 'bot');

        // Populate form
        document.getElementById('campaign-name').value = data.campaignName;
        document.getElementById('business-type').value = data.businessType;
        document.getElementById('location').value = data.location;
        document.getElementById('daily-budget').value = data.dailyBudget;
        document.getElementById('duration').value = data.duration;

        this.updateTotalBudget();
        this.validateForm();

        // Show form
        document.getElementById('campaign-form').classList.remove('hidden');
    }

    updateTotalBudget() {
        const dailyBudget = parseInt(document.getElementById('daily-budget').value) || 0;
        const duration = parseInt(document.getElementById('duration').value) || 0;
        const total = dailyBudget * duration;
        
        document.getElementById('total-budget').textContent = `₹${total.toLocaleString()}`;
        this.validateForm();
    }

    validateForm() {
        const campaignName = document.getElementById('campaign-name').value.trim();
        const dailyBudget = parseInt(document.getElementById('daily-budget').value) || 0;
        const duration = parseInt(document.getElementById('duration').value) || 0;
        
        const isValid = campaignName.length > 0 && dailyBudget > 0 && duration > 0;
        
        const createBtn = document.getElementById('create-campaign-btn');
        createBtn.disabled = !isValid;
        
        return isValid;
    }

    createCampaign() {
        if (!this.validateForm()) return;

        // Gather form data
        const campaignData = {
            id: Date.now(),
            name: document.getElementById('campaign-name').value.trim(),
            businessType: document.getElementById('business-type').value.trim(),
            location: document.getElementById('location').value.trim(),
            dailyBudget: parseInt(document.getElementById('daily-budget').value),
            duration: parseInt(document.getElementById('duration').value),
            totalBudget: parseInt(document.getElementById('daily-budget').value) * parseInt(document.getElementById('duration').value),
            status: 'active',
            createdAt: new Date().toISOString(),
            impressions: Math.floor(Math.random() * 50000) + 10000,
            clicks: Math.floor(Math.random() * 2000) + 500,
            spend: Math.floor(Math.random() * 5000) + 1000
        };

        // Add to campaigns array
        this.campaigns.push(campaignData);
        this.saveData();

        // Show success message and redirect
        alert(this.currentLanguage === 'en' 
            ? 'Campaign created successfully!' 
            : 'अभियान सफलतापूर्वक बनाया गया!');
        
        this.showPage('dashboard');
    }

    resetCampaignForm() {
        document.getElementById('chat-input').value = '';
        document.getElementById('campaign-form').classList.add('hidden');
        
        // Clear form
        document.getElementById('campaign-name').value = 'My Campaign';
        document.getElementById('business-type').value = '';
        document.getElementById('location').value = '';
        document.getElementById('daily-budget').value = 500;
        document.getElementById('duration').value = 30;
        this.updateTotalBudget();
    }

    initDashboard() {
        this.updateMetrics();
        this.renderCampaigns();
        this.initChart();
    }

    updateMetrics() {
        const activeCampaigns = this.campaigns.filter(c => c.status === 'active').length;
        const totalSpend = this.campaigns.reduce((sum, c) => sum + c.spend, 0);
        const totalImpressions = this.campaigns.reduce((sum, c) => sum + c.impressions, 0);
        const totalClicks = this.campaigns.reduce((sum, c) => sum + c.clicks, 0);
        const clickRate = totalImpressions > 0 ? ((totalClicks / totalImpressions) * 100).toFixed(1) : 0;

        document.getElementById('active-campaigns').textContent = activeCampaigns;
        document.getElementById('total-spend').textContent = `₹${totalSpend.toLocaleString()}`;
        document.getElementById('total-impressions').textContent = totalImpressions.toLocaleString();
        document.getElementById('click-rate').textContent = `${clickRate}%`;
    }

    renderCampaigns() {
        const container = document.getElementById('campaigns-container');
        
        if (this.campaigns.length === 0) {
            container.innerHTML = `<div class="empty-state">${this.currentLanguage === 'en' 
                ? 'No campaigns yet. Create your first campaign!' 
                : 'अभी तक कोई अभियान नहीं। अपना पहला अभियान बनाएं!'}</div>`;
            return;
        }

        container.innerHTML = this.campaigns.map(campaign => `
            <div class="campaign-item fade-in">
                <div class="campaign-header">
                    <h4 class="campaign-name">${campaign.name}</h4>
                    <span class="campaign-status ${campaign.status}">${campaign.status === 'active' ? 
                        (this.currentLanguage === 'en' ? 'Active' : 'सक्रिय') : 
                        (this.currentLanguage === 'en' ? 'Paused' : 'रोका गया')}</span>
                </div>
                <div class="campaign-details">
                    ${campaign.businessType ? `${campaign.businessType} • ` : ''}${campaign.location ? `${campaign.location} • ` : ''}₹${campaign.dailyBudget}/${this.currentLanguage === 'en' ? 'day' : 'दिन'} • ${campaign.duration} ${this.currentLanguage === 'en' ? 'days' : 'दिन'}
                </div>
                <div class="campaign-metrics">
                    <span class="campaign-metric"><strong>₹${campaign.spend.toLocaleString()}</strong> ${this.currentLanguage === 'en' ? 'spent' : 'खर्च'}</span>
                    <span class="campaign-metric"><strong>${campaign.impressions.toLocaleString()}</strong> ${this.currentLanguage === 'en' ? 'impressions' : 'इंप्रेशन'}</span>
                    <span class="campaign-metric"><strong>${campaign.clicks.toLocaleString()}</strong> ${this.currentLanguage === 'en' ? 'clicks' : 'क्लिक'}</span>
                </div>
            </div>
        `).join('');
    }

    initChart() {
        const ctx = document.getElementById('performance-chart');
        if (!ctx) return;

        if (this.performanceChart) {
            this.performanceChart.destroy();
        }

        const labels = this.campaigns.length > 0 
            ? this.campaigns.map(c => c.name)
            : [this.currentLanguage === 'en' ? 'No Data' : 'डेटा नहीं'];

        const impressionsData = this.campaigns.length > 0 
            ? this.campaigns.map(c => c.impressions)
            : [0];

        const clicksData = this.campaigns.length > 0 
            ? this.campaigns.map(c => c.clicks)
            : [0];

        this.performanceChart = new Chart(ctx, {
            type: 'bar',
            data: {
                labels: labels,
                datasets: [
                    {
                        label: this.currentLanguage === 'en' ? 'Impressions' : 'इंप्रेशन',
                        data: impressionsData,
                        backgroundColor: '#1FB8CD',
                        borderRadius: 4
                    },
                    {
                        label: this.currentLanguage === 'en' ? 'Clicks' : 'क्लिक',
                        data: clicksData,
                        backgroundColor: '#FFC185',
                        borderRadius: 4
                    }
                ]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: {
                        position: 'top'
                    }
                },
                scales: {
                    y: {
                        beginAtZero: true
                    }
                }
            }
        });
    }

    sendChatbotMessage() {
        const input = document.getElementById('chatbot-input');
        const message = input.value.trim();
        
        if (!message) return;

        // Add user message
        this.addChatbotMessage(message, 'user');
        input.value = '';

        // Generate response
        setTimeout(() => {
            const response = this.generateChatbotResponse(message);
            this.addChatbotMessage(response, 'bot');
        }, 500);
    }

    addChatbotMessage(message, sender) {
        const messagesContainer = document.getElementById('chatbot-messages');
        const messageDiv = document.createElement('div');
        messageDiv.className = `message ${sender}-message fade-in`;
        
        const contentDiv = document.createElement('div');
        contentDiv.className = 'message-content';
        contentDiv.textContent = message;
        
        messageDiv.appendChild(contentDiv);
        messagesContainer.appendChild(messageDiv);
        messagesContainer.scrollTop = messagesContainer.scrollHeight;
    }

    generateChatbotResponse(message) {
        const lowerMessage = message.toLowerCase();
        
        const activeCampaigns = this.campaigns.filter(c => c.status === 'active').length;
        const totalSpend = this.campaigns.reduce((sum, c) => sum + c.spend, 0);
        const totalImpressions = this.campaigns.reduce((sum, c) => sum + c.impressions, 0);
        const totalClicks = this.campaigns.reduce((sum, c) => sum + c.clicks, 0);

        if (lowerMessage.includes('how many') || lowerMessage.includes('campaigns') || lowerMessage.includes('कितने') || lowerMessage.includes('अभियान')) {
            return this.currentLanguage === 'en' 
                ? `You currently have ${activeCampaigns} active campaigns running.`
                : `वर्तमान में आपके पास ${activeCampaigns} सक्रिय अभियान चल रहे हैं।`;
        }
        
        if (lowerMessage.includes('spend') || lowerMessage.includes('cost') || lowerMessage.includes('खर्च')) {
            return this.currentLanguage === 'en' 
                ? `Your total campaign spend is ₹${totalSpend.toLocaleString()}.`
                : `आपका कुल अभियान खर्च ₹${totalSpend.toLocaleString()} है।`;
        }
        
        if (lowerMessage.includes('impression') || lowerMessage.includes('views') || lowerMessage.includes('इंप्रेशन')) {
            return this.currentLanguage === 'en' 
                ? `Your campaigns have generated ${totalImpressions.toLocaleString()} impressions so far.`
                : `आपके अभियानों ने अब तक ${totalImpressions.toLocaleString()} इंप्रेशन उत्पन्न किए हैं।`;
        }
        
        if (lowerMessage.includes('click') || lowerMessage.includes('क्लिक')) {
            return this.currentLanguage === 'en' 
                ? `Your campaigns have received ${totalClicks.toLocaleString()} clicks in total.`
                : `आपके अभियानों को कुल मिलाकर ${totalClicks.toLocaleString()} क्लिक मिले हैं।`;
        }
        
        if (lowerMessage.includes('performance') || lowerMessage.includes('प्रदर्शन')) {
            const clickRate = totalImpressions > 0 ? ((totalClicks / totalImpressions) * 100).toFixed(1) : 0;
            return this.currentLanguage === 'en' 
                ? `Your overall campaign performance shows a ${clickRate}% click rate with ${totalImpressions.toLocaleString()} impressions and ${totalClicks.toLocaleString()} clicks.`
                : `आपका समग्र अभियान प्रदर्शन ${totalImpressions.toLocaleString()} इंप्रेशन और ${totalClicks.toLocaleString()} क्लिक के साथ ${clickRate}% क्लिक दर दिखाता है।`;
        }

        // Default response
        return this.currentLanguage === 'en' 
            ? "I can help you with information about your campaigns, spending, impressions, clicks, and performance metrics. What would you like to know?"
            : "मैं आपके अभियानों, खर्च, इंप्रेशन, क्लिक और प्रदर्शन मेट्रिक्स के बारे में जानकारी के साथ आपकी मदद कर सकता हूँ। आप क्या जानना चाहते हैं?";
    }

    loadStoredData() {
        // For demo purposes, we'll start with empty campaigns
        // In a real app, this would load from localStorage or an API
        this.campaigns = [];
    }

    saveData() {
        // For demo purposes, we're not persisting data
        // In a real app, this would save to localStorage or an API
        console.log('Campaign saved:', this.campaigns[this.campaigns.length - 1]);
    }
}

// Initialize the app when the DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    window.addaptApp = new AddaptApp();
});