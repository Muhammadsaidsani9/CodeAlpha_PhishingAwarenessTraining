  export  let phishingdata=[
    {
    title:``,
    content:`  
    <div class="prac">
     <h2 class="section-title"><i class="fas fa-info-circle"></i> 1. What is Phishing?</h2> <p class="section-intro"> <strong>Phishing</strong> is refers as type of cyber attack where attackers impersonate trusted entities or people to trick victims into revealing sensitive information like passwords, bank details, as human-bieng is the weakest link in security posture of an organizations , attackers exploit this vulnerabilities in humans to achieve there desired malicious objectives and goals.
         </p><div class="stats-box"> <div class="stat"><strong>90%</strong>
            <span>of cyber attacks start with phishing</span>
        </div>
        <div class="stat"><strong>3.4B</strong>
            <span>phishing emails sent daily</span>
        </div>
         <div class="stat"><strong>$4.91M</strong>
            <span>average cost of a data breach from phishing </span>
        </div>
     </div>
    <h3>
    <i class="fas fa-sitemap"></i> Main Types of Phishing Attacks</h3>
    <div class="tactic-grid">
        <div class="tactic-card"><h4><i class="fas fa-envelope"></i> Email Phishing</h4> <p>Most attackers present to a user a link or an attachment that look like a valid , trusted source. when the user click it he or she is prompted to disclosed confidential information such as his or her username or password.”</p> </div>
         <div class="tactic-card"><h4><i class="fas fa-crosshairs"></i> Spear Phishing</h4> <p>is a Phishing attempt that is constructed in a very specific and directly target specific groups or individuals .</p>
         </div>
      <div class="tactic-card"><h4><i class="fas fa-crown">

       </i> Whaling</h4><p>Spear phishing is a Phishing attempt that targeted at high-profiled in business executives and key individuals in an organization.</p>
       </div>
     <div class="tactic-card"><h4><i class="fas fa-sms"></i> Shoulder Surfing</h4> <p> someone obtain informations such as personal identifiable information(PII) and other confidential data by looking over's victims shoulder.</p> </div> 
     <div class="tactic-card"> <h4><i class="fas fa-phone-alt"></i> Vishing</h4> <p>Voice phishing calls. “is a social engineering attacks that carried out in a phone conversations. The attacker parsuade to reveal private personal and personal information or infoamation about another person or a company”</p>
     </div> 
   
   </div> 
   </div>
    
        
`
    },
    {
     title:``,
    content:`<div class="prac">

        <div class="section-title"><i class="fas   fa-envelope-open-text"></i> 📧 How to Recognize Phishing Emails</div>
        <div class="grid-2">
            <div>
                <h3><i class="fas fa-exclamation-triangle"></i> Red flags in emails</h3>
                <ul style="margin-left: 1.5rem; margin-top: 0.8rem;">
                    <li><strong>Urgency / threats</strong> — “Your account will be closed in 24h”</li>
                    <li><strong>Generic greetings</strong> — “Dear Customer” instead of your name</li>
                    <li><strong>Mismatched or suspicious sender</strong> — “support@paypa1.com”</li>
                    <li><strong>Poor spelling & grammar</strong> — rushed scam messages</li>
                    <li><strong>Unexpected attachments or links</strong> — invoice.exe, fake login page</li>
                </ul>
                <div class="email-sim">
                    <i class="fas fa-envelope"></i> <strong>Suspicious email example:</strong><br>
                    From: "security@paypa1.com"<br>
                    Subject: ⚠️ Your account has been locked!<br>
                    <span style="background:#fff1f0;">Click here to verify immediately: <span style="color:#b91c1c;">http://paypal-verify.secure-login.net</span></span><br>
                    <span class="red-flag"><i class="fas fa-flag"></i> Urgent threat</span>
                    <span class="red-flag"><i class="fas fa-flag"></i> Fake domain (paypa1)</span>
                    <span class="red-flag"><i class="fas fa-flag"></i> Generic greeting</span>
                </div>
            </div>
            <div>
                <h3><i class="fas fa-globe"></i> Spotting Fake Websites</h3>
                <ul style="margin-left: 1.5rem; margin-bottom: 1rem;">
                    <li>Inspect the URL: typos like <strong>amaz0n.com</strong> or <strong>faceb00k.com</strong></li>
                    <li>Check for HTTPS, but remember: <strong>phishing sites can also have SSL</strong> certificates</li>
                    <li>Hover over links BEFORE clicking — see real destination (status bar)</li>
                    <li>Look for unusual pop-ups asking for credentials</li> 
                </ul>
                <div class="hover-link-demo">
                    <i class="fas fa-mouse-pointer"></i> <strong>Fake URL example:</strong><br>
                    <span style="font-family: monospace;">https://secure-login.microsoft-verify.xyz/login</span><br>
                    ✅ Legit Microsoft uses <strong>microsoft.com</strong> – extra words = suspicious!
                </div>
            </div>
        </div>
    </div>`
    },
    {
    title:'',
    content:`<div class="prac">
        <div class="section-title"><i class="fas fa-user-secret"></i> 🧠 Social Engineering Tactics</div>
        <div class="grid-2">
            <div class="tip-card"><i class="fas fa-phone-alt"></i> <strong>Authority</strong>
            is when attackers pretend to be powerfull important , or official people.
            </div>
            <div class="tip-card"><i class="fas fa-sms"></i> <strong>Fear</strong>
            is making one scared of negative consequences
            </div>
            <div class="tip-card"><i class="fas fa-chart-line"></i> <strong>Urgency</strong>
            is creating pressure to make someone act immediately without thinking carefully
            </div>
            <div class="tip-card"><i class="fas fa-fish"></i> <strong>Social Proof</strong>
            is occur when people tend to follow what others are doing, because thet believe it must be correct.
            </div>
            <div class="tip-card"><i class="fas fa-hand-holding-usd"></i> <strong>Likeness</strong>
            people are more likely to trust and obey someone they like, relate to, or feel connected with.
            </div>
        </div>
        <p class="note" style="margin-top: 0.8rem;background:#f1f5f9;padding:0.7rem;border-radius:2rem;"><i class="fas fa-lightbulb"></i> Attackers manipulate fear, curiosity, and helpfulness — always verify identity through a separate channel.</p>
    </div>`,

    },
    {
    title:'',
    content:`<div class="prac">
        <div class="section-title"><i class="fas fa-check-circle"></i> 🛡️ Best Practices to Avoid Phishing</div>
        <div class="grid-2">
         <div class="tip-card">
            <div><i class="fas fa-fingerprint"></i> <strong>Enable MFA (Multi-Factor Authentication)</strong> – Even if password is stolen.</div>
            <div><i class="fas fa-eye"></i> <strong>Hover before you click</strong> – See where links really lead.</div>
            <div><i class="fas fa-key"></i> <strong>Use a password manager</strong> – It auto-fills only on legitimate sites.</div>
            <div><i class="fas fa-flag"></i> <strong>Report phishing</strong> – Use “Report phishing” button in email clients.</div>
            <div><i class="fas fa-database"></i> <strong>Enlightment and education</strong>eduate employess regularly.</div>
            <div><i class="fas fa-mobile-alt"></i>limted oversharing on social media</div>
        </div>
        <div style="margin-top: 1rem;background:#eef2ff;border-radius: 2rem;padding: 0.8rem;text-align:center">
            🔐 <strong>Golden rule:</strong> Do not trust everything on internrt.
        </div>
        </div>
    </div>`
    },
    {
     title:'',
     content:` <div class="prac">
        <div class="section-title"><i class="fas fa-history"></i> 🌍 Real-World Phishing Attacks</div>
        <div class="grid-2">
            <div class="real-example-card">
                <i class="fab fa-google"></i> <strong>Google Docs Worm (2017)</strong><br>
                Attackers sent emails appearing as Google Docs sharing requests. Once clicked, users gave access to their entire contact list. Millions affected.<br>
                <span class="red-flag">Lesson: Always checked what permission an app is asking for, The fakes app asked for " Read, Send, Delete, Emails</span>
                <span class="red-flag">Key takeaway: never authorize unknown OAuth apps.</span>
            </div>
            <div class="real-example-card">
                <i class="fas fa-building"></i> <strong>Twitter Bitcion Scam 2020</strong><br>
                Cybercriminals took over verified accounts of Elon Musk, Barrack Obama, Bill Gates. they tweeted to send "$1000 Bitcions , i will send $2000 back" over 300 people falls victims<br>
                <span class="red-flag">Lesson: verified accounts is not equals to safes </span>
                 <span class="red-flag">Key takeaway: Never send money based on socials media post, no matter who posted it. alway s verified through other channels</span>
            </div>
            <div class="real-example-card">
                <i class="fas fa-truck"></i> <strong> Nigerian Prince Scam/ MOdern GTBAnk SMS (2024-2025)</strong><br>
                 You get an SMS "GTBank you account will be Blocked . Click gtb-nigria.com to update KYC " the link redirect to fake site that steals login informations. <br>
                <span class="red-flag">Lesson: verified accounts is not equals to safes </span>
                 <span class="red-flag">Key takeaway: if you get banks SmS with link delete it , open your bank app</span>
            </div>
        </div>
    </div>
     ` 
    },
    {
    title:``,
    content:`<div class="prac">
        <div class="section-title"><i class="fas fa-question-circle"></i> 📝 Interactive Quiz: Are You Phish-Proof?</div>
        <p>Test your skills with real-life scenarios. Each question reveals feedback after you submit answers.</p>
        <div id="quizContainer">
            <!-- questions loaded via JS but can be static -->
        </div>
        <div style="display: flex; gap: 1rem; flex-wrap: wrap; justify-content: space-between; align-items: center; margin-top: 10px;">
            <button id="submitQuizBtn" class="btn btn-primary"><i class="fas fa-check-double"></i> Submit Answers</button>
            <button id="resetQuizBtn" class="btn btn-secondary"><i class="fas fa-undo-alt"></i> Reset Quiz</button>
        </div>
        <div id="quizScore" class="score-area" style="display: none;"></div>
    </div>`
    }
];

export   const quizData = [
        {
            text: "You receive an email from 'Netflix' stating your billing info is expired. The sender address is 'billing@netflix-update.com'. URL inside: 'http://netflix.com-account-verify.com/login'. What do you do?",
            options: [
                "Click the link and update payment info immediately",
                "Reply to the email asking for more details",
                "Hover over the link, notice suspicious domain, and go directly to Netflix official website",
                "Ignore because Netflix doesn't send such emails"
            ],
            correct: 2,
            explanation: "✅ Correct! Hover shows fake domain. Always navigate directly to official website. The sender address is a classic phishing trick."
        },
        {
            text: "A caller says : i'm from mircrosoft support . Ypur PC has a virus . Give me remote access to fix it . what's this called",
            options: [
                "Vishing",
                "Whaling",
                "Baiting"
            ],
            correct: 0,
            explanation: "🎣 Scareware + Quid pro quo: they offer 'help' in exchange for remote access or credit card info. Never call unsolicited numbers."
        },
        {
            text: "A colleague receives a Slack message from 'IT Dept' asking for their password to 'fix an urgent security issue'. How should they respond?",
            options: [
                "Send password quickly to avoid account lock",
                "Ask for a badge ID and verify by calling official IT number",
                "Ignore because IT will never need password",
                "Forward the request to your manager"
            ],
            correct: 1,
            explanation: "🔒 Never share passwords via chat/mail. Legit IT never asks for credentials. Verify identity using trusted contact."
        },
        {
            text: "You get an emails : you won $20000! claim now by paying $2000 processing fee.<br> What  social engineering tactics is this?",
            options: [
                "Authority",
                "Trust",
                "Scarcity and Greed"
            ],
            correct: 2,
            explanation: "✔️ Create Urgency and greed . if you didnt enter a contest , you didn't win."
        },
        {
            text: "Which recent real-world attack involved fake Google Docs invitations stealing user data?",
            options: [
                "Twitter Bitcoin scam",
                "Google Docs worm 2017",
                "Colonial Pipeline ransomware",
                "Equifax breach"
  ], correct: 1,
	explanation: " Google Docs worm 2017: users granted permission to a malicious app that spammed contacts. Always verify OAuth permissions."},
	 { text: "You get a text from 'USPS' with a tracking link: 'usps-delivery—fee.com'. You recently ordered a package. Best action?",
	  options: [ "Click the link and see small fee", 
		"Reply STOP to unsubscribe",
		 "Go to official USPS website manually, or check tracking via original order confirmation",
		"Forward the text to a friend"],
		 correct: 2, explanation: " SMiShing attempt! Fake fees steal your card info. Always copy tracking number into the official carrier site."} ];