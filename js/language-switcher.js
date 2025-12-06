// Language Switcher for Coach Lee Website
// Supports Thai (TH) and English (EN)

const translations = {
    th: {
        // Navbar
        'nav-cta': 'ทักมาปรึกษาฟรีๆ',

        // Hero Section
        'hero-title-1': 'ลดเวลางานแอดมิน',
        'hero-title-2': 'ดูแลลูกค้าได้มากขึ้น โดยไม่ต้องจ้างแอดมินเพิ่ม',
        'hero-subtitle': 'ระบบโค้ชลี คือระบบเก็บข้อมูลการกินของลูกเทรนด์เพียงแค่ลูกเทรนส่งรูปอาหาร ระบบจะเก็บ Data ลง Google Sheets พร้อมสร้าง Dashboard สรุปข้อมูลโภชนาการทีลูกเทรนทานอัตโนมัติ พร้อมทั้งช่วยลูกเทรนด์นับแคลอรี่ที่กินในแต่ละวันว่า ทานอาหาร ครบแล้ว หรือ ขาด ไปอีกเท่าไหร่',

        // Problem Section
        'problem-title': 'เป็นเทรนเนอร์มันเหนื่อยใช่ไหม',
        'problem-1-title': '😫 หมดวันไปกับการ "กรอกข้อมูล"',
        'problem-1-desc': 'แทนที่จะเอาเวลาไปปั้นหุ่นลูกค้า กลับต้องมานั่ง Copy ข้อมูลจากไลน์ ลงตารางทีละคน... วันละ 2 ชั่วโมง!',
        'problem-2-title': '⏰ แชทไหล... ข้อมูลหาย',
        'problem-2-desc': 'ลูกค้าส่งรูปอาหารมาปนกับคุยเล่น จะย้อนดูประวัติการกินทีต้องไถแชทจนนิ้วล็อค วิเคราะห์ผลลำบาก',
        'problem-3-title': '😔 อยากรับลูกค้าเพิ่ม... แต่ไหวแค่นี้',
        'problem-3-desc': 'พอรับเยอะก็ดูแลไม่ทั่วถึง ตอบช้า ลืมตรวจการบ้าน สุดท้ายลูกค้าเก่าไม่ต่อสัญญา ลูกค้าใหม่ก็ไม่กล้ารับ',

        // How it Works
        'how-title': '3 Step ง่ายๆ ไม่ต้องโหลดแอป',
        'step-1-badge': 'ขั้นที่ 1',
        'step-1-title': 'ลูกเทรนถ่ายรูปอาหาร<br/>ส่งไลน์',
        'step-1-desc': 'ลูกเทรนของคุณเพียงแค่ส่งรูปอาหารที่กินในแต่ละมื้อให้กับ Coach Lee Bot ผ่านแอปพลิเคชัน LINE ได้เลย ไม่มีความซับซ้อน ไม่ต้องโหลดแอปใหม่',
        'step-1-tag-1': 'LINE',
        'step-1-tag-2': 'รูปภาพ',
        'step-2-badge': 'ขั้นที่ 2',
        'step-2-title': 'AI คำนวณแคลอรี่<br/>ติดตามการกิน',
        'step-2-desc': 'ระบบ AI ของเราจะวิเคราะห์รูปภาพอาหารและคำนวณแคลอรี่ รวมถึง macronutrients (โปรตีน ไขมัน คาร์บ) โดยอัตโนมัติ แล้วส่งผลลัพธ์กลับไปให้ลูกเทรนของคุณทราบทันที',
        'step-2-tag-1': 'อัตโนมัติ',
        'step-2-tag-2': 'ถูกต้อง',
        'step-3-badge': 'ขั้นที่ 3',
        'step-3-title': 'Dashboard สรุป<br/>ความก้าวหน้า',
        'step-3-desc': 'ข้อมูลทั้งหมดจะถูกบันทึกลงใน Google Sheets โดยอัตโนมัติ และระบบจะสร้าง Dashboard ที่แสดงข้อมูลรวม เช่น การกินของลูกเทรนด์ทั้งสัปดาห์ เทียบกับเป้าหมายเพื่อให้คุณ Coach สามารถวิเคราะห์ว่าลูกเทรนด์ต้องปรับอะไรบ้าง',
        'step-3-tag-1': 'Dashboard',
        'step-3-tag-2': 'Insights',

        // Trust Section
        'trust-title': 'กลัวลูกเทรนไม่อิน... เพราะใช้ AI?',
        'trust-subtitle': 'ผมเข้าใจความกังวลนี้ดีครับ และผมก็เชื่อว่าเราไม่ควรทำ Automation ไปกับทุกงาน โดยเฉพาะงานที่ต้องมีความสัมพันธ์ที่ดีกับลูกค้า ผมเลยทำCoach Lee มาเพื่อ Automate งานที่เราต้องทำซ้ำๆอย่างการTracking และ เก็บข้อมูลโภชนาการ เพื่อให้คุณเอาเวลาทำงานเหล่านี้ ไปใช้สร้าง \'ความสัมพันธ์\' กับลูกค้าจริงๆแทน',
        'old-way': '❌ แบบเก่า (ไม่มีระบบ)',
        'old-way-title': 'โค้ชสายกรรมกร',
        'old-way-bullet-1': 'หมดเวลาไปกับการทวงรูป จ้องตาแตกกับ Excel',
        'old-way-bullet-2': 'ตอบไลน์ลูกค้าสั้นๆ "ครับ/เคครับ" เพราะรีบ',
        'old-way-bullet-3': 'Result: ลูกค้ารู้สึกห่างเหิน เพราะคุยกันแต่เรื่องงาน',
        'new-way': '✅ แบบใหม่ (ใช้ Coach Lee)',
        'new-way-title': 'โค้ชที่ปรึกษา (ตัวจริง)',
        'new-way-bullet-1': 'งานตัวเลขให้บอททำ จบใน 1 วิ',
        'new-way-bullet-2': 'เอาเวลาไปไปสร้างคอมมิวนิตี้เพื่อสร้างความสัมพันธ์ที่ดีกับลูกเทรน',
        'new-way-bullet-3': 'Result: ลูกค้ารักกว่าเดิม เพราะคุณใส่ใจถูกจังหวะ',

        // Features
        'features-title': 'ทำไมต้อง Coach Lee',
        'feature-1-title': 'ซื้อ "เวลาชีวิต" คืนมา',
        'feature-1-desc-1': 'เราซื้ออดีตไม่ได้... แต่เราซื้ออนาคตได้ครับ ให้ระบบทำงานซ้ำซากแทนคุณ เพื่อให้คุณมีเวลาไปโฟกัสสิ่งที่สำคัญจริงๆ',
        'feature-1-desc-2': '💡 ลองคำนวณดูเล่นๆ นะครับ...<br>ประหยัดวันละ 2 ชม. × 365 วัน = <b class="text-black">730 ชม./ปี</b><br>เท่ากับได้วันหยุดเพิ่ม <b class="text-lime-600">ฟรีๆ 1 เดือนเต็ม!</b>',
        'feature-2-title': 'Zero Friction',
        'feature-2-desc': 'ผมเข้าใจครับว่าการเปลี่ยนแปลงวิธีการทำงานนั้นยากเสมอ ผมจึงออกแบบระบบให้เชื่อมต่อกับสิ่งที่ลูกเทรนคุ้นเคยอยู่แล้ว อย่าง LINE เพียงแค่ให้ลูกเทรนแอด ส่งรูปอาหารรายวัน ใช้ได้แล้ว!',
        'feature-3-title': 'พัฒนาลูกค้าตรงจุด',
        'feature-3-desc': 'Dashboard ที่คอยบอกว่า ลูกเทรนของคุณกินโปรตีน ไขมัน คาร์บเป็นสัดส่วนเท่าไหร่ คุณก็จะสามารถให้คำแนะนำให้ลูกเทรนได้อย่างมีประสิทธิภาพกว่าเดิม',

        // Founder Story
        'founder-title': 'สวัสดีครับ ผมดิวเอง',
        'founder-p1': 'ผมสร้าง Coach Lee เพราะผมเป็นคนออกกำลังกาย <b>อยากมีกล้าม</b> แต่ไม่ค่อยได้ Track การกินของผม ทำให้ผมเพิ่มน้ำหนักได้ช้า และกล้ามขึ้นช้า',
        'founder-p2': 'และผมเคยลองใช้ App tracking อาหารทั่วไปแล้ว มัน<b>ลำบากที่จะคอยกรอกข้อมูล</b>แต่ละอย่าง ผมเลยไม่ใช้ 😅',
        'founder-p3': 'วันนึงผมได้ไปเรียนรู้เกี่ยวกับการทำ Automation ด้วย AI มาแล้วก็นึก<b>อยากลองทำโปรเจ็กเล่นๆ</b>เป็นของตัวเองเพื่อใช้เอง เพราะเห็นว่าเราน่าจะทำให้การเก็บข้อมูลการกินง่ายๆเพียงถ่ายรูปได้',
        'founder-p4': 'แต่เมื่อผมเอาตัวโปรเจ็กเล่นๆของผมเอาไปลงเฟสบุคของผม <b>กลับมีคนให้ความสนใจอย่างมาก</b> ประกอบกับดิวเห็นโค้ชคนนึงในไอจีที่ต้องตอบไลน์ลูกเทรนดึกๆ ก็เลยคิดว่าถ้าเราทำระบบที่ช่วยโค้ชกับลูกเทรนได้น่าจะมีประโยชน์มากๆเลย จึงเป็นที่มาของ <span class="font-bold text-lime-600">โค้ชลี</span> ของเราครับ',

        // Video Demo
        'video-title': 'ดูการใช้งานจริง',
        'video-waiting': 'รอสักครู่ค้าบ 🎬',
        'video-desc': 'กำลังทำวิดิโออยู่ค้าบเดียวเอามาแปะ',

        // Pricing
        'pricing-badge': '🚧 PRE-SALE : เปิดจองรุ่นบุกเบิก',
        'pricing-title-1': 'จองสิทธิ์ก่อน... ในราคาที่',
        'pricing-title-2': 'คนมาทีหลังจะไม่มีวันได้',
        'pricing-subtitle': 'ระบบกำลังเข้าสู่ช่วงสุดท้ายของการพัฒนา (Finalizing)',
        'pricing-presale': '🚀 เปิด Presale เฉพาะ 20 ท่านแรก',
        'pricing-deadline': '⏰ จำกัดเวลา: ถึง 31 ธันวาคมนี้เท่านั้น',
        'pricing-lifetime': 'ราคาพิเศษตลอดชีพ เฉพาะผู้เข้าร่วม Presale เท่านั้น',
        'pricing-capacity': '💪 ราคานี้ดูแลได้ถึง 50 ลูกเทรน',
        'pricing-custom-title': '🛠️ ฟรี! ปรับแต่งฟีเจอร์ตามสั่ง <span class="text-lime-400">(Customization)</span>',
        'pricing-custom-desc': 'เนื่องจากระบบอยู่ในช่วงโค้งสุดท้ายของการพัฒนา... <br class="hidden md:block">นี่คือสิทธิพิเศษสำหรับลูกค้า Pre-sale ที่จะได้ <b>"บอกปัญหา & รีเควสฟีเจอร์ที่อยากได้"</b> <br>เพื่อให้ผมพัฒนาเวอร์ชัน Final ออกมาตอบโจทย์การทำงานของคุณที่สุด <br><span class="text-lime-100 mt-2 block">เหมือนคุณได้เข้ามาเป็น <b class="text-lime-400">"ส่วนหนึ่งของการพัฒนา"</b> และ <u class="text-white decoration-lime-400 decoration-2 underline-offset-4">ได้ใช้ระบบที่คุณอยากได้จริงๆ</u></span>',
        'pricing-notice': '<span class="text-lime-400 font-bold text-xl">*</span> ราคาจะปรับเป็น <span class="text-lime-400 font-bold text-xl">฿1,990.-/เดือน</span> ทันทีที่เปิดตัวอย่างเป็นทางการ (Official Launch)',
        'pricing-monthly': 'รายเดือน (Monthly)',
        'pricing-monthly-price': '฿990',
        'pricing-monthly-desc': 'จ่ายสบายๆ ยกเลิกเมื่อไหร่ก็ได้',
        'pricing-yearly': 'รายปี (Yearly)',
        'pricing-yearly-price': '฿9,900',
        'pricing-yearly-badge': '🔥 คุ้มที่สุด (Save 20%)',
        'pricing-yearly-avg': '(เฉลี่ยเพียง 825.- ต่อเดือน)',
        'pricing-cta': 'ติดต่อเรา Facebook Page',
        'pricing-limited-bonus': 'Limited Bonus',
        'pricing-limited-disclaimer': '(สิทธิพิเศษนี้สงวนสิทธิ์เฉพาะ 20 ท่านแรกเท่านั้น)',
        'pricing-yearly-benefit-1': 'ล็อกราคานี้ตลอดชีพ (ไม่ปรับขึ้น)',
        'pricing-yearly-benefit-2': 'ฟรี! ค่า Setup ระบบ (มูลค่า 2,000.-)',
        'pricing-yearly-benefit-3': 'ได้ใช้ฟีเจอร์ใหม่ก่อนใคร (Beta Access)',

        // Infographic Text
        'infographic-send-food': 'ส่งรูปอาหาร',
        'infographic-to-bot': 'ให้ Coach Lee Bot',

        // Mockup Student Names
        'mockup-student-1': 'สมชาย',
        'mockup-student-2': 'นัฐชา',

        // FAQ
        'faq-title': 'ถามมา ตอบไว',
        'faq-q1': 'ลูกค้าต้องโหลดแอปเพิ่มไหม?',
        'faq-a1': 'ไม่ต้องโหลดครับ ใช้ผ่านไลน์ได้เลย ลูกเทรนของคุณเพียงแค่แอด Coach Lee Bot ใน LINE แล้วส่งรูปอาหารที่ทานรายวันได้เลย ไม่มีความยุ่งยากเรื่องแอปพลิเคชันเพิ่มเติม',
        'faq-q2': 'ถ้าลูกค้าลืมอัพโหลดอาหารจะทำยังไง?',
        'faq-a2': 'สามารถอัพโหลดรูปวันถัดมาก็ได้ เพราะแคลอรี่เป้าหมายก็จะทบจากเมื่อวานที่กินไม่ถึงเกณฑ์มา ระบบจะจดจำและสะสมไว้ เพื่อให้ลูกเทรนสามารถไม่กังวลเรื่องการลืมได้ ถ้าลืมก็ทำได้วันหลัง',
        'faq-q3': 'AI จะประเมินแคลอรี่ได้ถูกจริงๆหรอ?',
        'faq-a3': 'เราสั่งให้ AI ประมาณจากปริมาณอาหารจากรูป เช่นในจานนั้นมีผัก เนื้อสัตว์ ก็จะประเมินจากวัตถุดิบเลย แม้แต่อาหารพื้นบ้านก็ดูออก เพราะ AI ของเราได้รับการฝึกฝนให้รู้จักอาหารไทยทั่วไป อาหารภูมิศาสตร์ แล้วก็สามารถประเมินแคลอรี่ได้อย่างแม่นยำ',

        // Footer
        'footer-title': 'พร้อมเอาเวลาไปพัฒนา<br/>อย่างอื่นหรือยัง?',
        'footer-subtitle': 'ตัดสินใจในวันนี้และเริ่มต้นการใช้งาน Coach Lee พร้อมได้รับส่วนลดพิเศษ Presale เพียง ฿990/เดือน',
        'footer-cta': 'เริ่มใช้งาน',
        'footer-copyright': '© 2024 Coach Lee. All rights reserved.',
    },

    en: {
        // Navbar
        'nav-cta': 'Chat with Us',

        // Hero Section
        'hero-title-1': 'Save Time on Admin Work',
        'hero-title-2': 'Serve More Clients Without Hiring Extra Staff',
        'hero-subtitle': 'Coach Lee is an automated nutrition tracking system. Your trainees simply send food photos, and the system logs data to Google Sheets, creates automated nutrition dashboards, and helps trainees track daily calorie intake - whether they\'ve met or missed their goals.',

        // Problem Section
        'problem-title': 'Being a Trainer is Exhausting, Right?',
        'problem-1-title': '😫 Wasting Days on "Data Entry"',
        'problem-1-desc': 'Instead of sculpting your clients\' physiques, you\'re stuck copying data from LINE to spreadsheets one by one... 2 hours a day!',
        'problem-2-title': '⏰ Chats Overflow... Data Disappears',
        'problem-2-desc': 'Clients send food photos mixed with casual chat. To review eating history, you scroll endlessly until your fingers hurt. Analysis becomes a nightmare.',
        'problem-3-title': '😔 Want More Clients... But Can\'t Handle It',
        'problem-3-desc': 'Too many clients means inadequate care. Slow responses. Forgotten check-ins. Existing clients don\'t renew. Too scared to take new ones.',

        // How it Works
        'how-title': '3 Easy Steps - No App Download',
        'step-1-badge': 'Step 1',
        'step-1-title': 'Trainee Photos Food<br/>Sends via Telegram',
        'step-1-desc': 'Your trainees simply send photos of their meals to Coach Lee Bot through Telegram. No complexity. No new app downloads required.',
        'step-1-tag-1': 'Telegram',
        'step-1-tag-2': 'Photo',
        'step-2-badge': 'Step 2',
        'step-2-title': 'AI Calculates Calories<br/>Tracks Nutrition',
        'step-2-desc': 'Our AI system analyzes food images and automatically calculates calories including macronutrients (protein, fat, carbs), then instantly sends results back to your trainees.',
        'step-2-tag-1': 'Automatic',
        'step-2-tag-2': 'Accurate',
        'step-3-badge': 'Step 3',
        'step-3-title': 'Dashboard Summarizes<br/>Progress',
        'step-3-desc': 'All data is automatically logged to Google Sheets. The system creates a comprehensive dashboard showing weekly nutrition data compared to goals, helping you analyze what adjustments your trainees need.',
        'step-3-tag-1': 'Dashboard',
        'step-3-tag-2': 'Insights',

        // Trust Section
        'trust-title': 'Worried Trainees Won\'t Engage... Because of AI?',
        'trust-subtitle': 'I understand this concern. We shouldn\'t automate everything, especially relationship-building. That\'s why I created Coach Lee to automate repetitive tasks like tracking and data collection, so you can use that time to build genuine \'relationships\' with clients instead.',
        'old-way': '❌ Old Way (No System)',
        'old-way-title': 'Manual Labor Coach',
        'old-way-bullet-1': 'Wasting time chasing photos, staring at Excel spreadsheets',
        'old-way-bullet-2': 'Quick replies to clients "OK/Got it" because you\'re rushing',
        'old-way-bullet-3': 'Result: Clients feel distant because conversations are only about work',
        'new-way': '✅ New Way (Using Coach Lee)',
        'new-way-title': 'True Consultant Coach',
        'new-way-bullet-1': 'Let the bot handle numbers, done in 1 second',
        'new-way-bullet-2': 'Use that time to build community and strong relationships with trainees',
        'new-way-bullet-3': 'Result: Clients love you more because you care at the right moments',

        // Features
        'features-title': 'Why Choose Coach Lee',
        'feature-1-title': 'Buy Back Your "Life Time"',
        'feature-1-desc-1': 'We can\'t buy back the past... but we can buy back the future. Let the system handle repetitive tasks so you can focus on what truly matters.',
        'feature-1-desc-2': '💡 Let\'s do the math...<br>Save 2 hrs/day × 365 days = <b class="text-black">730 hrs/year</b><br>That\'s like getting <b class="text-lime-600">a full extra month off!</b>',
        'feature-2-title': 'Zero Friction',
        'feature-2-desc': 'I understand that changing workflows is always difficult. That\'s why I designed the system to integrate with tools your trainees already use—like Telegram. Just have them add the bot, send daily food photos, and you\'re good to go!',
        'feature-3-title': 'Targeted Client Development',
        'feature-3-desc': 'A dashboard that shows exactly how much protein, fat, and carbs your trainees are consuming. This lets you give more effective, personalized guidance than ever before.',

        // Founder Story
        'founder-title': 'Hi, I\'m Dew',
        'founder-p1': 'I built Coach Lee because I work out and <b>wanted to build muscle</b>, but I wasn\'t tracking my food intake consistently. This slowed down my weight gain and muscle growth.',
        'founder-p2': 'I tried using typical food tracking apps, but it was <b>tedious to manually log</b> everything. So I stopped using them 😅',
        'founder-p3': 'One day, I learned about AI automation and thought <b>I\'d build a side project</b> for myself—something that could make food tracking as simple as taking a photo.',
        'founder-p4': 'But when I posted my little side project on Facebook, <b>it got tons of interest</b>. Plus, I saw a coach on Instagram replying to trainee messages late at night. That\'s when I realized: a system that helps both coaches and trainees could be incredibly valuable. And that\'s how <span class="font-bold text-lime-600">Coach Lee</span> was born.',

        // Video Demo
        'video-title': 'See It In Action',
        'video-waiting': 'Hold on a sec 🎬',
        'video-desc': 'Making the video now, will paste it here soon',

        // Pricing
        'pricing-badge': '🚧 PRE-SALE: Early Bird Registration',
        'pricing-title-1': 'Reserve Your Spot... At a Price',
        'pricing-title-2': 'Latecomers Will Never Get',
        'pricing-subtitle': 'System entering final development stage (Finalizing)',
        'pricing-presale': '🚀 Presale Limited to First 20 Only',
        'pricing-deadline': '⏰ Limited Time: Until December 31st Only',
        'pricing-lifetime': 'Lifetime special price for Presale participants only',
        'pricing-capacity': '💪 This price covers up to 50 trainees',
        'pricing-custom-title': '🛠️ Free! Custom Feature Requests <span class="text-lime-400">(Customization)</span>',
        'pricing-custom-desc': 'Since the system is in its final development stage... <br class="hidden md:block">This is a special perk for Pre-sale customers: <b>"Tell us your problems & request features you want"</b> <br>So I can develop the Final version to perfectly match your workflow <br><span class="text-lime-100 mt-2 block">It\'s like you become <b class="text-lime-400">"part of the development"</b> and <u class="text-white decoration-lime-400 decoration-2 underline-offset-4">get the exact system you truly want</u></span>',
        'pricing-notice': '<span class="text-lime-400 font-bold text-xl">*</span> Price will increase to <span class="text-lime-400 font-bold text-xl">$54/month</span> upon official launch',
        'pricing-monthly': 'Monthly Plan',
        'pricing-monthly-price': '$27',
        'pricing-monthly-desc': 'Pay comfortably, cancel anytime',
        'pricing-yearly': 'Yearly Plan',
        'pricing-yearly-price': '$270',
        'pricing-yearly-badge': '🔥 Best Value (Save 20%)',
        'pricing-yearly-avg': '(Only $22.50 per month average)',
        'pricing-cta': 'Contact Us on Facebook',
        'pricing-limited-bonus': 'Limited Bonus',
        'pricing-limited-disclaimer': '(This special offer is reserved for the first 20 only)',
        'pricing-yearly-benefit-1': 'Lock this price forever (no price increase)',
        'pricing-yearly-benefit-2': 'Free! System Setup ($70 value)',
        'pricing-yearly-benefit-3': 'Get new features first (Beta Access)',

        // Infographic Text
        'infographic-send-food': 'Send Food Photo',
        'infographic-to-bot': 'to Coach Lee Bot',

        // Mockup Student Names
        'mockup-student-1': 'John',
        'mockup-student-2': 'Sarah',

        // FAQ
        'faq-title': 'FAQ',
        'faq-q1': 'Do clients need to download another app?',
        'faq-a1': 'No download needed. Works through Telegram. Your trainees just add Coach Lee Bot on Telegram and send daily food photos. No additional app complexity.',
        'faq-q2': 'What if clients forget to upload food?',
        'faq-a2': 'They can upload the next day. Calorie goals roll over from yesterday\'s shortfall. The system remembers and accumulates, so trainees don\'t worry about forgetting. Missed today? Do it tomorrow.',
        'faq-q3': 'Will AI really estimate calories accurately?',
        'faq-a3': 'We instruct AI to estimate from food portions in photos. If the plate has vegetables and meat, it estimates from ingredients directly. Even local Thai dishes work because our AI is trained on common Thai foods and regional cuisines, enabling accurate calorie estimation.',

        // Footer
        'footer-title': 'Ready to Spend Time<br/>On Other Things?',
        'footer-subtitle': 'Decide today and start using Coach Lee with special Presale discount at only ฿990/month',
        'footer-cta': 'Get Started',
        'footer-copyright': '© 2024 Coach Lee. All rights reserved.',
    }
};

// Language Switcher Class
class LanguageSwitcher {
    constructor() {
        this.currentLang = localStorage.getItem('language') || 'th';
        this.init();
    }

    init() {
        // Set initial language
        this.setLanguage(this.currentLang, false);

        // Add event listener to toggle button
        const toggleBtn = document.getElementById('languageToggle');
        if (toggleBtn) {
            toggleBtn.addEventListener('click', () => this.toggleLanguage());
        }
    }

    toggleLanguage() {
        const newLang = this.currentLang === 'th' ? 'en' : 'th';
        this.setLanguage(newLang);
    }

    setLanguage(lang, save = true) {
        this.currentLang = lang;

        // Save to localStorage
        if (save) {
            localStorage.setItem('language', lang);
        }

        // Update button text
        const langDisplay = document.getElementById('currentLang');
        if (langDisplay) {
            langDisplay.textContent = lang === 'th' ? '🇹🇭 TH' : '🇬🇧 EN';
        }

        // Update all translatable elements
        this.translatePage();
    }

    translatePage() {
        const elements = document.querySelectorAll('[data-i18n]');
        elements.forEach(element => {
            const key = element.getAttribute('data-i18n');
            const translation = translations[this.currentLang][key];

            if (translation) {
                // Check if translation contains any HTML tags
                if (translation.includes('<')) {
                    element.innerHTML = translation;
                } else {
                    element.textContent = translation;
                }
            }
        });
    }
}

// Initialize when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    new LanguageSwitcher();
});
