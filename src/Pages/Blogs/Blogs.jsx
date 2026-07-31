import React from "react";
import { Link } from "react-router-dom";
import "./Blogs.css";

// TODO: these image paths mirror the original Blade url('frontend/...') paths.
// Local entries are relative to the /frontend static folder (e.g. served from
// /public/frontend/...); absolute https:// entries are used as-is. Update
// BLOG_IMAGE_BASE if your images are served from a different location.
const BLOG_IMAGE_BASE = "/frontend/";

const getImageSrc = (image) => (image.startsWith("http") ? image : `${BLOG_IMAGE_BASE}${image}`);

const blogs = [
    { image: "images/blog/blogs_image/27072026.jpg", month: "JUL", day: "27", title: "How Often Should You Have a Gynecological Checkup?", slug: "how-often-should-you-have-a-gynecological-checkup" },
    { image: "images/blog/blogs_image/20072026.jpg", month: "JUL", day: "20", title: "Never Ignore the Warning Signs: Why Prevention Is Always Better Than Cure", slug: "never-ignore-the-warning-signs-why-prevention-is-always-better-than-cure" },
    { image: "images/blog/blogs_image/13072026.jpg", month: "JUL", day: "13", title: "Best Lifestyle Changes to Protect Your Liver from Fatty Liver Disease", slug: "best-lifestyle-changes-to-protect-your-liver-from-fatty-liveer-disease" },
    { image: "images/blog/blogs_image/29062026.jpg", month: "JUN", day: "29", title: "Monsoon Child Care: Essential Health Tips Every Parent Should Know", slug: "monsoon-child-care-essential-health-tips-every-parent-should-know" },
    { image: "images/blog/blogs_image/22062026.jpg", month: "JUN", day: "22", title: "How Lifestyle Choices Can Help Reduce Cancer Risk", slug: "how-lifestyle-choices-can-help-reduce-cancer-risk" },
    { image: "images/blog/blogs_image/03062026.jpg", month: "JUN", day: "03", title: "Rising Cases of Shigellosis: What You Need to Know to Protect Yourself", slug: "rising-cases-of-shigellosis-what-you-need-to-know-to-protrct-yourself" },
    { image: "images/blog/blogs_image/01062026.jpg", month: "JUN", day: "01", title: "Monsoon Health Guide: Essential Precautions for a Safe and Healthy Rainy Season", slug: "monsoon-health-guide-essential-precautions-for-a-safe-and-healthy-rainy-season" },
    { image: "images/blog/blogs_image/04052026.jpg", month: "MAY", day: "04", title: "Unique Heart Risks in Women: What You Need to Know Today", slug: "unique-heart-risks-in-women-what-you-need-to-know-today" },
    { image: "images/blog/blogs_image/28042026.jpg", month: "APR", day: "28", title: "Don't Ignore the Risk: Snake Bite Deaths Increasing in Hot Weather", slug: "dont-ignore-the-risk-snake-bite-deaths-increasing-in-hot-weather" },
    { image: "images/blog/blogs_image/20042026.jpg", month: "APR", day: "20", title: "Hot Climate and Your Health: What You Need to Know", slug: "hot-climate-and-your-health-what-you-need-to-know" },
    { image: "images/blog/blogs_image/06042026.webp", month: "APR", day: "06", title: "Stay Hydrated: Protect Yourself from Summer Season Diseases", slug: "stay-hydrated-protect-yourself-from-summer-season-diseases" },
    { image: "images/blog/blogs_image/30032026.webp", month: "MAR", day: "30", title: "Take Charge of Your Health with Timely Medical Checkups", slug: "take-charge-of-your-health-with-timely-medical-checkups" },
    { image: "images/blog/blogs_image/10032026.jpg", month: "MAR", day: "10", title: "How Does Your Gut Affect the overall well-being of the Body?", slug: "how-does-your-gut-affect-the-overall-well-being-of-the-body" },
    { image: "images/blog/blogs_image/03032026.jpg", month: "MAR", day: "03", title: "Rising Heart Attack Cases: Are Men or Women More Affected?", slug: "rising-heart-attack-cases-are-men-or-womwn-more-affected" },
    { image: "images/blog/blogs_image/23022026.jpg", month: "FEB", day: "23", title: "Why Stroke Is Increasing and How to Protect Yourself?", slug: "why-stroke-is-increasing-and-how-to-protect-yourself" },
    { image: "images/blog/blogs_image/18022026.webp", month: "FEB", day: "18", title: "Weeks of Cough? Don't Ignore the Warning Signs", slug: "weeks-of-cough-dont-ingore-the-warning-signs" },
    { image: "images/blog/blogs_image/09022026.jpg", month: "FEB", day: "09", title: "The Safer Choice: Avoiding Self-Medication and Seeking Expert Care", slug: "the-safer-choice-avoiding-self-medication-and-seeking-expert-care" },
    { image: "images/blog/blogs_image/15012026.webp", month: "JAN", day: "15", title: "Psychiatric Care for Every Stage of Life at PK Das Hospital", slug: "psychiatric-care-for-every-stage-of-life-at-pkdas-hospital" },
    { image: "images/blog/blogs_image/06012026.webp", month: "JAN", day: "06", title: "Understanding Body Tingling and Its Connection to Nerve Health", slug: "understanding-body-tingling-and-its-connection-to-nerve-health" },
    { image: "images/blog/blogs_image/29122025.webp", month: "DEC", day: "29", title: "Build Better Gynecological Health Through Healthy Lifestyle Choices", slug: "build-better-gynecological-health-through-healthy-lifestyle-choices" },
    { image: "images/blog/blogs_image/22122025.webp", month: "DEC", day: "22", title: "Your Skin, Your Safety: Choose the Best For Your Skin & Hair", slug: "your-skin-your-safrty-choose-the-best-for-your-skin-and-hair" },
    { image: "images/blog/blogs_image/01122025.webp", month: "DEC", day: "01", title: "The Rising Need for Neurology Care Among Working People", slug: "the-rising-need-for-neurology-care-among-working-people" },
    { image: "images/blog/blogs_image/24112025.webp", month: "NOV", day: "24", title: "From Pregnancy to Postpartum: A Care Path You Can Trust", slug: "from-pregnancy-to-postpartum-a-care-path-you-can-trust" },
    { image: "images/blog/blogs_image/11112025.webp", month: "NOV", day: "11", title: "Screen Addiction: A Rising Concern in the Digital Era", slug: "screen-addiction-a-rising-concern-in-the-digital-era" },
    { image: "images/blog/blogs_image/05112025.webp", month: "NOV", day: "05", title: "Regain Your Confidence with Advanced Hair Loss Treatments at PK Das Hospital", slug: "regain-your-confidence-with-advanced-hair-loss-treatments-at-pkdashospital" },
    { image: "images/blog/blogs_image/31102025.webp", month: "OCT", day: "31", title: "The Deep Impact of Addiction - Understanding, Healing, and Hope at PK Das Hospital.", slug: "the-deep-impact-of-addiction" },
    { image: "images/blog/blogs_image/Heart-Disease.webp", month: "OCT", day: "13", title: "Chronic Stress and Heart Disease: What You Need to Know!", slug: "chronic-stress-and-heart-disease-what-you-need-to-know" },
    { image: "images/blog/blogs_image/07102025.webp", month: "OCT", day: "07", title: "Your Mental Well-being Matters: Safe and Confidential Support at PK Das Hospital", slug: "Your-mental-well-being-matters-safe-and-confidential-support-at-pkdashospital" },
    { image: "images/blog/blogs_image/29092025.webp", month: "SEP", day: "29", title: "Don't Miss a Beat: Protect Your Heart and Your Life", slug: "dont-miss-a-beat-protect-your-heart-and-your-life" },
    { image: "images/blog/blogs_image/22092025 (1).webp", month: "SEP", day: "22", title: "Neglecting Scalp Health: A Common Hair Care Mistake and Its Consequences", slug: "neglecting-scalp-health-a-common-hair-care-mistake-and-its-consequences" },
    { image: "images/blog/blogs_image/110512.webp", month: "SEP", day: "01", title: "Why Migraines Are Becoming a Common Health Issue Today?", slug: "why-migraines-are-becoming-a-common-health-issue-today" },
    { image: "images/blog/blogs_image/508.webp", month: "AUGUST", day: "27", title: "How Lifestyle Choices Affect Women's Reproductive Health?", slug: "how-lifestyle-choices-affect-womens-reproductive-health" },
    { image: "images/blog/blogs_image/78627.webp", month: "AUGUST", day: "18", title: "Why Appendicitis is More Prevalent in Young Adults – Knowing Age-Related Risks", slug: "why-appendicitis-is-more-prevalent-in-young-adults-knowing-age-related-risks" },
    { image: "images/blog/blogs_image/Neurological and Mental Health.webp", month: "AUGUST", day: "13", title: "The connection between Neurological and Mental Health", slug: "the-connection-between-neurological-and-mental-health" },
    { image: "images/blog/blogs_image/110701.jpg", month: "AUGUST", day: "06", title: "Celebrating Breastfeeding Week: A Promise of Health and Attachment", slug: "Celebrating-Breastfeeding-Week-A-Promise-of-Health-and-Attachment" },
    { image: "images/blog/blogs_image/2148193062.webp", month: "JULY", day: "30", title: "Think Before You Diet: Understanding the Right Way to Lose or Gain Weight", slug: "Think-Before-You-Diet-Understanding-the-Right-Way-to-Lose-or-Gain-Weight" },
    { image: "images/blog/blogs_image/2149106327.jpg", month: "JULY", day: "21", title: "Hair Transplant Issues? Why choosing the Right Clinic is Important?", slug: "Hair-Transplant-Issues-Why-choosing-the-Right-Clinic-is-Important" },
    { image: "images/blog/blogs_image/86575.jpg", month: "JULY", day: "08", title: "The Rise of Hypertension in Young People", slug: "the-rise-of-hypertension-in-young-people" },
    { image: "images/blog/blogs_image/2149703455.jpg", month: "JULY", day: "03", title: "PCOD and PCOS: Understanding of the Causes and Finding the Correct Treatment", slug: "PCOD-and-PCOS-Understanding-of-the-Causes-and-Finding-the-Correct-Treatment" },
    { image: "images/blog/blogs_image/muscle-pain.jpg", month: "JUNE", day: "25", title: "Muscle Pain in Youngsters: What's Behind It?", slug: "muscle-pain-in-youngsters-what-is-behind-it" },
    { image: "images/blog/blogs_image/Acidity and Heartburn.jpg", month: "JUNE", day: "18", title: "Acidity and Heartburn: Common Problems That Should Not Be Ignored", slug: "Acidity-and-Heartburn-Common-Problems-That-Should-Not-Be-Ignored" },
    { image: "images/blog/blogs_image/2149748416.jpg", month: "JUNE", day: "14", title: "Confronting the Silent Struggles: Depressions and Anxiety in Teenagers", slug: "Confronting-the-Silent-Struggles-Depressions-and-Anxiety-in-Teenagers" },
    { image: "images/blog/blogs_image/6199.jpg", month: "JUNE", day: "04", title: "COVID-19 Cases Are On the Rise Again – Stay Safe", slug: "COVID-19-Cases-Are-On-the-Rise-Again-Stay-Safe" },
    { image: "images/blog/blogs_image/12910.jpg", month: "MAY", day: "29", title: "PK Das Hospital - Committed to Your Health and Safety", slug: "PKDIMS-Committed-to-Your-Health-and-Safety" },
    { image: "images/blog/blogs_image/2026.jpg", month: "MAY", day: "21", title: "Preventive Measures for Staying Healthy During the Monsoon Season", slug: "Preventive-Measures-for-Staying-Healthy-During-the-Monsoon-Season" },
    { image: "images/blog/blogs_image/PACH8771 (1) (1).jpg", month: "MAY", day: "12", title: "A New Chapter in Healthcare for Ambalapara – PK Das Medical Centre", slug: "New-Chapter-in-Healthcare-for-Ambalapara-PK-Das-Medical-Centre" },
    { image: "images/blog/blogs_image/2148173204.jpg", month: "MAY", day: "06", title: "Food Safety First: Building a Healthy Life with Better Diet Choices", slug: "Food-Safety-First-Building-a-Healthy-Life-with-Better-Diet-Choices" },
    { image: "images/blog/blogs_image/2148533051.jpg", month: "APR", day: "29", title: "Lung Cancer: The Most Common Cancer and Its Impact on Health", slug: "Lung-Cancer-The-Most-Common-Cancer-and-Its-Impact-on-Health" },
    { image: "images/blog/blogs_image/93178.jpg", month: "APR", day: "25", title: "How Stress Impacts the Brain?", slug: "How-Stress-Impacts-the-Brain" },
    { image: "images/blog/blogs_image/6237.jpg", month: "APR", day: "16", title: "Gastroenterology and Lifestyle Diseases: Understanding the Connection", slug: "Gastroenterology-and-Lifestyle-Diseases" },
    { image: "images/blog/blogs_image/19392970.jpg", month: "APR", day: "03", title: "How Diabetes and High Blood Pressure Impact Kidney Health?", slug: "How-Diabetes-and-High-Blood-Pressure-Impact-Kidney-Health" },
    { image: "https://www.pkdashospital.com/frontend/images/bg-image/pkdims.png", month: "MAR", day: "26", title: "The Importance of Taking Care of Your Health with Regular Check-ups", slug: "Importance-of-Taking-Care-of-Your-Health-with-Regular-Check-ups" },
    { image: "https://pkdashospital.com/frontend/images/blog/blogs_image/1723.jpg", month: "MAR", day: "10", title: "Say No to Drugs, Say Yes to Life: De-addiction Services at P.K. Das Hospital", slug: "De-addiction-Services" },
    { image: "https://pkdashospital.com/frontend/images/blog/blogs_image/3234.jpg", month: "MAR", day: "04", title: "Stay Hydrated and Stay Safe: Battling the Scorching Summer Heat", slug: "Stay-Hydrated-and-Stay-Safe-Battling-the-Scorching-Summer-Heat" },
    { image: "https://pkdashospital.com/frontend/images/blog/blogs_image/20994.jpg", month: "FEB", day: "25", title: "Hyperpigmentation and Melasma Explained: Expert Care at Palakkad's Best Skincare Clinic", slug: "Hyperpigmentation-and-Melasma-Explained-Expert-Care-at-Palakkads-Best-Skincare-Clinic" },
    { image: "https://pkdashospital.com/frontend/images/blog/Emergency Care.jpg", month: "FEB", day: "12", title: "PKDIMS – The Best Hospital in Palakkad for Emergency Care", slug: "The-Best-Hospital-in-Palakkad-for-Emergency-Care" },
    { image: "https://www.pkdashospital.com/frontend/images/blog/blogs_image/1564.jpg", month: "FEB", day: "04", title: "Home Remedies vs. Professional Treatments - What's Best for Scar Revisions?", slug: "Whats-Best-for-Scar-Revisions" },
    { image: "https://www.pkdashospital.com/frontend/images/blog/blogs_image/29336.jpg", month: "JAN", day: "31", title: "The Role of ENT Care in Speech and Hearing Development", slug: "Role-of-ENT-Care-in-Speech-and-Hearing-Development" },
    { image: "https://www.pkdashospital.com/frontend/images/blog/blogs_image/2149235795.webp", month: "JAN", day: "22", title: "The Impact of Food Habits on Health and Diseases", slug: "Impact-of-Food-Habits-on-Health-and-Diseases" },
    { image: "https://www.pkdashospital.com/frontend/images/blog/blogs_image/27073.webp", month: "JAN", day: "14", title: "Why Lifestyle Diseases Need Immediate Attention?", slug: "Why-Lifestyle-Diseases-Need-Immediate-Attention" },
    { image: "https://www.pkdashospital.com/frontend/images/blog/blogs_image/2149628047.jpg", month: "JAN", day: "10", title: "Seasonal Skincare Guide: Tips for Healthy Skin All Year Round", slug: "Seasonal-Skincare-Guide" },
    { image: "https://www.pkdashospital.com/frontend/images/blog/blogs_image/sasneham.jpeg", month: "JAN", day: "01", title: "\"Sasneham\": Transforming Healthcare with Compassion and Affordability", slug: "Sasneham-Transforming-Healthcare-with-Compassion-and-Affordability" },
    { image: "https://www.pkdashospital.com/frontend/images/blog/blogs_image/17465.jpg", month: "DEC", day: "24", title: "Your Health, Our Priority: General Medicine at PKDIMS", slug: "Your-Health-Our-Priority-General-Medicine-PKDIMS" },
    { image: "https://www.pkdashospital.com/frontend/images/blog/blogs_image/2148962517.jpg", month: "DEC", day: "21", title: "PKDIMS: Transforming Lives with Precision General Surgery", slug: "Transforming-Lives-with-Precision-General-Surgery" },
    { image: "https://www.pkdashospital.com/frontend/images/blog/blogs_image/2149352174.jpg", month: "DEC", day: "16", title: "Why Opt for Plastic Surgery Over Normal Surgery or Laser Treatments for Aesthetic Enhancement?", slug: "Plastic-Surgery-Over-Normal-Surgery" },
    { image: "https://www.pkdashospital.com/frontend/images/blog/blogs_image/19748409.jpg", month: "DEC", day: "12", title: "Men vs. Women: Understanding the Key Differences in Skin Health", slug: "Men-vs-Women-Understanding-the-Key-Differences-in-Skin-Health" },
    { image: "https://www.pkdashospital.com/frontend/images/blog/blogs_image/2150321634.webp", month: "DEC", day: "10", title: "The Role of Physiotherapy in Treating Postural Issues and Back Pain", slug: "role-of-physiotherapy-in-treating-postural-issues-and-back-pain" },
    { image: "https://www.pkdashospital.com/frontend/images/blog/blogs_image/35566.webp", month: "DEC", day: "06", title: "Is Mental Wellness Your Goal? How Can PKDIMS Support Your Journey?", slug: "Is-Mental-Wellness-Your-Goal" },
    { image: "https://www.pkdashospital.com/frontend/images/blog/blogs_image/2149152749.jpg", month: "DEC", day: "03", title: "Solve Your Hair Fall Issues at PKDIMS: Expert Treatments for Healthy Hair", slug: "Solve-Your-Hair-Fall-Issues-at-PKDIMS" },
    { image: "https://www.pkdashospital.com/frontend/images/blog/blogs_image/2263.jpg", month: "NOV", day: "28", title: "PKDIMS: The Best Choice for Eye Care Services in Palakkad", slug: "The-Best-Choice-for-Eye-Care-Services" },
    { image: "https://www.pkdashospital.com/frontend/images/blog/blogs_image/2149040256.jpg", month: "NOV", day: "26", title: "Non-Invasive Cardiology Services at PK Das Hospital: Leading Heart Health Care in Palakkad", slug: "Leading-Heart-Health-Care-in-Palakkad" },
    { image: "https://www.pkdashospital.com/frontend/images/blog/blogs_image/infer.jpg", month: "NOV", day: "21", title: "The Leading IVF Centre in Kerala - PK Das Hospital", slug: "PKDIMS-The-Leading-IVF-Centre-in-Kerala" },
    { image: "https://www.pkdashospital.com/frontend/images/blog/blogs_image/2151224212.jpg", month: "NOV", day: "19", title: "Why PKDIMS is the Best Hospital for Neonatology Services in Palakkad?", slug: "Neonatology-Services-in-Palakkad" },
    { image: "https://www.pkdashospital.com/frontend/images/blog/blogs_image/1527.jpg", month: "NOV", day: "13", title: "Pediatric Nephrology: Understanding Pediatric Kidney Disease and the Best Care at PK Das Hospital", slug: "Understanding-Pediatric-Kidney-Disease" },
    { image: "https://www.pkdashospital.com/frontend/images/blog/blogs_image/833.jpg", month: "NOV", day: "12", title: "Achieve the Perfect Smile with PK Das Hospital's Advanced Orthodontic Treatments", slug: "Achieve-the-Perfect-Smile-with-PKDIMS-Advanced-Orthodontic-Treatments" },
    { image: "https://www.pkdashospital.com/frontend/images/blog/blogs_image/8056.jpg", month: "NOV", day: "07", title: "The Power of Endourology: Advancing Early Detection", slug: "The-Power-of-Endourology-Advancing-Early-Detection" },
    { image: "https://www.pkdashospital.com/frontend/images/blog/blogs_image/2148539172.webp", month: "NOV", day: "05", title: "Common Pediatric Conditions Treated with Physiotherapy", slug: "Common-Pediatric-Conditions-Treated-with-Physiotherapy" },
    { image: "https://www.pkdashospital.com/frontend/images/blog/blogs_image/51340.webp", month: "NOV", day: "04", title: "Lung Cancer among Non-Smokers: Causes, Risks, and Early Detection", slug: "lung-cancer-among-Non-Smoker" },
    { image: "https://www.pkdashospital.com/frontend/images/blog/blogs_image/infer.jpg", month: "OCT", day: "29", title: "Fertility Treatments: An Overview of Treatment Options and Success Rates", slug: "Fertility-treatments" },
    { image: "images/blog/blogs_image/43605.webp", month: "OCT", day: "23", title: "The Impact of Dehydration on Kidney Function", slug: "The-Impact-of-Dehydration-on-Kidney-Function" },
    { image: "images/blog/blogs_image/1882.webp", month: "OCT", day: "21", title: "Impact of Sweet Foods and Beverages on Your Teeth: What You Need to Know", slug: "Impact-of-Sweet-Foods-and-Beverages-on-Your-Teeth" },
    { image: "images/blog/blogs_image/2148026315.webp", month: "OCT", day: "17", title: "Understanding Mental Health in Children: Why It Matters?", slug: "Understanding-Mental-Health-in-Children" },
    { image: "images/blog/blogs_image/2149204960.webp", month: "OCT", day: "14", title: "Why Men Should Care About Skincare and Haircare: Unique Challenges That Men Face and the Solutions", slug: "Men-Should-Care-About-Skincare-and-Haircare" },
    { image: "images/blog/blogs_image/2149357321.webp", month: "OCT", day: "10", title: "Hormonal Imbalances in Women: Causes, Symptoms, and Treatment Options", slug: "Hormonal-Imbalances-in-Women" },
    { image: "images/blog/blogs_image/58133.webp", month: "OCT", day: "07", title: "Heart Attacks in Young Adults - What's Causing the Spike?", slug: "Heart-Attacks-in-Young-Adults" },
    { image: "images/blog/blogs_image/9395.webp", month: "OCT", day: "03", title: "Long Screen Time Impact on Eyes: Problems, Solutions, and Tips for Children and Adults", slug: "Long-Screen-Time-Impact-On-Eyes" },
    { image: "images/blog/blogs_image/2147882133.webp", month: "OCT", day: "01", title: "How Proper Nutrition Supports Both Weight Gain and Loss?", slug: "Nutrition-Supports-Both-Weight-Gain-and-Loss" },
    { image: "images/blog/blogs_image/2148283621.webp", month: "SEPT", day: "30", title: "Debunking Common Cancer Myths: Separating Fact from Fiction", slug: "debunking-common-cancer-myths" },
    { image: "images/blog/blogs_image/146483.jpg", month: "SEPT", day: "18", title: "Early Warning Signs of Teenage Depression and How to Show Support", slug: "Signs-of-Teenage-Depression" },
    { image: "images/blog/blogs_image/2149243058.jpg", month: "SEPT", day: "12", title: "Healthy Gut, Healthy Life: The Role of Diet Managing Digestive Disorders", slug: "The-Role-of-Diet-Managing-Digestive-Disorders" },
    { image: "images/blog/blogs_image/23270.jpg", month: "SEPT", day: "10", title: "P.K. Das Hospital: Your Partner in Achieving the Look You Desire", slug: "Your-Partner-in-Achieving-the-Look-You-Desire" },
    { image: "images/blog/blogs_image/6905.jpg", month: "SEPT", day: "06", title: "Understanding Your Skin Type: Expert Dermatology Advice for Healthy Skin", slug: "Expert-Dermatology-Advice-for-Healthy-Skin" },
    { image: "images/blog/blogs_image/2149656082.jpg", month: "SEPT", day: "02", title: "Common Mental Disorders in Adults: Symptoms, Causes, and Treatments", slug: "Common-Mental-Disorders-in-Adults" },
    { image: "images/blog/blogs_image/2170.jpg", month: "AUGUST", day: "28", title: "Innovative Treatments in Orthopedics: An Overview of New Technologies", slug: "Innovative-Treatments-in-Orthopedics" },
    { image: "images/blog/blogs_image/262.jpg", month: "AUGUST", day: "22", title: "Voice Disorders: Recognizing and Treating Vocal Problems", slug: "Recognising-and-treating-vocal-problems" },
    { image: "images/blog/blogs_image/269959.jpg", month: "AUGUST", day: "17", title: "The Power of Orthodontics for a Healthier, Happier You", slug: "Power-of-Orthodontics" },
    { image: "images/blog/blogs_image/blog14c.jpg", month: "AUGUST", day: "14", title: "Your Vision, Our Expertise – A Leading Center for Comprehensive Eye Care", slug: "Comprehensive-Eye-Care" },
    { image: "images/blog/blogs_image/2150276280.jpg", month: "AUGUST", day: "10", title: "Pregnancy and Postpartum: A Journey of Change, Support, and Strength", slug: "Pregnancy-and-Postpartum" },
    { image: "images/blog/blogs_image/18237.jpg", month: "AUGUST", day: "03", title: "Let's Stand Together for Wayanad to Rise Again", slug: "Stand-Together-for-Wayanad-to-Rise-Again" },
    { image: "images/blog/blogs_image/44248.jpg", month: "JULY", day: "31", title: "The Heart-Stress Connection: Why You Should Care?", slug: "The-Heart-Stress-Connection-Why-You-Should-Care" },
    { image: "images/blog/blogs_image/blog10b.jpg", month: "JULY", day: "26", title: "Trusted Leaders in Urological Health: Choosing P.K. Das Hospital is Choosing the Best", slug: "PKDIMS-Trusted-Leaders-in-Urological-Health" },
    { image: "images/blog/blogs_image/blog9b.jpg", month: "JULY", day: "24", title: "P.K. Das Hospital: The Pinnacle of Pediatric Care in Palakkad", slug: "PKDIMS-The-Pinnacle-of-Pediatric-Care" },
    { image: "images/blog/blogs_image/blog8b.jpg", month: "JULY", day: "19", title: "How Diet Plays a Major Role in the Treatment of Various Diseases?", slug: "diet-role-in-the-treatment-of-various-diseases" },
    { image: "images/blog/blogs_image/blog7a.jpg", month: "JULY", day: "17", title: "Understanding Neurodevelopmental Disorders in Children: Early Intervention and Treatment Options", slug: "Neurodevelopmental-Disorders-in-Children" },
    { image: "images/blog/blogs_image/blog6a.jpg", month: "JULY", day: "15", title: "Why Professional Consultation is Important for Skin Problems?", slug: "Professional-Consultation-for-Skin-Problems" },
    { image: "images/blog/blogs_image/blog5.jpg", month: "JULY", day: "10", title: "Health Matters: Prioritizing Your Well-being at PK Das Hospital", slug: "Health-Matters-Prioritizing-Your-Well-being-at-PKDIMS" },
    { image: "images/blog/blogs_image/blog4.jpg", month: "JULY", day: "5", title: "The Crucial Role of Lifestyle in Heart Diseases", slug: "The-Crucial-Role-of-Lifestyle-in-Heart-Diseases" },
    { image: "images/blog/blogs_image/infer.jpg", month: "JULY", day: "5", title: "Understanding Infertility: Causes and Treatments", slug: "understanding-infertility-causes-and-treatments" },
    { image: "images/blog/blog2.jpg", month: "JULY", day: "2", title: "Innovative Cancer Therapies at PK Das Institute of Medical Sciences", slug: "innovative-cancer-therapies-at-pk-das-institute-of-medical-sciences" },
    { image: "images/blog/doc_day.jpg", month: "JULY", day: "1", title: "Celebrating Doctors: Everyday Heroes in Healthcare", slug: "Celebrating-Doctors-Everyday-Heroes-in-Healthcare" },
];

const Blogs = () => {
    return (
        <>
            {/* ===================== HERO ===================== */}
            <section className="gm-hero gm-hero--compact">
                <div className="gm-overlay"></div>
                <div className="container">
                    <div className="gm-hero-content">
                        <nav aria-label="breadcrumb" className="gm-breadcrumb">
                            <ol className="breadcrumb">
                                <li className="breadcrumb-item">
                                    <Link to="/">Home</Link>
                                </li>
                                <li className="breadcrumb-item active" aria-current="page">
                                    Blogs
                                </li>
                            </ol>
                        </nav>

                        <span className="gm-badge">
                            <i className="fa fa-newspaper-o me-2"></i>&nbsp;Health Insights
                        </span>

                        <h1>Blogs</h1>
                        <p>
                            Health tips, awareness articles, and updates from the specialists at PK Das
                            Hospital.
                        </p>
                    </div>
                </div>
            </section>

            {/* ===================== BLOG GRID ===================== */}
            <section className="gm-blog-list">
                <div className="container">
                    <div className="row g-4">
                        {blogs.map((post) => (
                            <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12" key={post.slug}>
                                <Link to={`/${post.slug}`} className="gm-blog-card">
                                    <div className="gm-blog-thumb">
                                        <img src={getImageSrc(post.image)} alt={post.title} />
                                        <div className="gm-blog-overlay"></div>
                                        <div className="gm-blog-date">
                                            <h4>
                                                {post.month}
                                                <br />
                                                <span>{post.day}</span>
                                            </h4>
                                        </div>
                                    </div>
                                    <div className="gm-blog-body">
                                        <h3>{post.title}</h3>
                                    </div>
                                </Link>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
};

export default Blogs;