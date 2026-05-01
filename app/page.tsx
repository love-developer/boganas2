"use client"
import React, { useState } from 'react'
import { IoCallOutline, IoChevronDown, IoLogoWhatsapp, IoTimeOutline } from 'react-icons/io5'
import { RiMoneyDollarCircleLine } from 'react-icons/ri'

const purposeOptions = [
  { id: 'rent', label: 'للايجار' },
  { id: 'exchange', label: 'للبدل' },
  { id: 'sale', label: 'للبيع' },
]

const featuredCards = [
  {
    id: 1,
    title: 'للبيع بيت في صباح الناصر',
    price: '370,000 د.ك',
    time: 'منذ 30 دقيقة',
    image:
      'https://pub-c839aceddc8d42a3ae148c2001b4ed58.r2.dev/ads/56f8b592-cd0b-4489-a245-14ab973cc846.jpeg',
    description:
      'للبيع فيلا في منطقة صباح الناصر، المساحة 375م، الموقع شارع وسكة، رئيسي، تتكون من 3 أدوار وربع، ديوانية، يوجد شقق، وثيقة حرة، السعر 370 ألف دينار.',
  },
  {
    id: 2,
    title: 'للبيع بيت في غرب عبدالله المبارك',
    price: '475 د.ك',
    time: 'منذ 44 دقيقة',
    image: '/background.png',
    description:
      'للبيع قسيمة بغرب عبدالله مبارك موقع شارع واحد قريب الخدمات، تتكون من سرداب وثلاثة أدوار وربع بتشطيب سوبر ديلوكس.',
  },
  {
    id: 3,
    title: 'للبيع بيت في القرين',
    price: '380,000 د.ك',
    time: 'منذ ساعة واحدة تقريباً',
    image:
      'https://pub-c839aceddc8d42a3ae148c2001b4ed58.r2.dev/ads/36c0d204-e800-4195-8f5f-3e030d7ad0b5.jpeg',
    description:
      'للبيع بيت في منطقة القرين، الموقع شارع وسكة جانبية، ارتداد أمامي، يتكون من 3 أدوار وسرداب، ديوانية، فاضي، السعر 380 ألف دينار.',
  },
  {
    id: 4,
    title: 'للبيع بيت في المطلاع',
    price: '295,000 د.ك',
    time: 'منذ ساعتين تقريباً',
    image:
      'https://pub-c839aceddc8d42a3ae148c2001b4ed58.r2.dev/ads/2787941a-d51a-4c87-a10d-9599b4d0248f.jpeg',
    description:
      'للبيع فيلا في مدينة المطلاع السكنية، الموقع زاوية، ارتداد أمامي، تتكون من دورين ونصف، مصعد، جاهزة للسكن.',
  },
]

const page = () => {
  const [activePurpose, setActivePurpose] = useState('rent')

  return (
    <div>
      {/* nav  */}
      <div>
        <nav className="lg:hidden border-b border-gray-200" dir="rtl">
          <div className="grid h-[76px] grid-cols-3 items-center px-3">
            <div className="flex justify-start">
              <img src="/logo.png" alt="Boganas Logo" className="h-14 w-auto object-contain" />
            </div>

            <div className="flex justify-center">
              <img
                src="/country.png"
                alt="Kuwait flag"
                className="h-12 w-12 rounded-full object-cover ring-1 ring-black/10"
              />
            </div>

            <div className="flex justify-end">
              <button className="p-2 text-gray-900 hover:text-primary transition-colors relative cursor-pointer">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-bell"
                  aria-hidden="true"
                >
                  <path d="M10.268 21a2 2 0 0 0 3.464 0"></path>
                  <path d="M3.262 15.326A1 1 0 0 0 4 17h16a1 1 0 0 0 .74-1.673C19.41 13.956 18 12.499 18 8A6 6 0 0 0 6 8c0 4.499-1.411 5.956-2.738 7.326"></path>
                </svg>
              </button>
            </div>
          </div>
        </nav>

        <nav
          dir="rtl"
          className="hidden lg:flex items-center px-12 py-2 bg-white border-b border-gray-200 sticky top-0 z-50"
        >
          <div className="flex-shrink-0">
            <a href="/">
              <img
                alt="Boganas Logo"
                loading="lazy"
                width="100"
                height="40"
                decoding="async"
                data-nimg="1"
                className="h-16 w-auto"
                src="/logo.png"
                style={{ color: 'transparent' }}
              />
            </a>
          </div>

          <div className="flex-1 flex justify-center items-center gap-8 text-[15px] font-[500]">
            <a className="text-gray-900 hover:text-primary transition-colors px-2" href="/">
              الرئيسية
            </a>
            <a className="text-gray-900 hover:text-primary transition-colors px-2" href="/offices">
              المكاتب
            </a>
            <a className="text-gray-900 hover:text-primary transition-colors px-2" href="/plans">
              الخطط
            </a>
            <a className="text-gray-900 hover:text-primary transition-colors px-2" href="/account">
              الحساب
            </a>
            <button
              data-slot="button"
              className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-sm text-sm disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive dark:hover:bg-accent/50 py-2 has-[>svg]:px-3 text-gray-900 hover:bg-transparent hover:text-primary transition-colors font-semibold px-2 h-auto"
              title="Switch to English"
              style={{ cursor: 'pointer' }}
            >
              English
            </button>
            <button
              data-slot="button"
              className="inline-flex items-center justify-center gap-2 whitespace-nowrap transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive border bg-transparent shadow-xs dark:bg-input/30 dark:border-input dark:hover:bg-input/50 has-[>svg]:px-3 border-gray-200 text-gray-900 hover:bg-gray-50 hover:text-primary rounded-xl px-6 py-2 h-10 text-sm font-semibold ml-4"
              style={{ cursor: 'pointer' }}
            >
              + إضافة إعلان مجاني
            </button>
          </div>

          <div className="flex items-center gap-4">
            <a className="flex items-center justify-center" href="/">
              <img
                alt="Kuwait flag"
                loading="lazy"
                width="44"
                height="44"
                decoding="async"
                data-nimg="1"
                className="h-10 w-10 rounded-full object-cover"
                src="/country.png"
                style={{ color: 'transparent' }}
              />
            </a>
            <button className="p-2 text-gray-900 hover:text-primary transition-colors relative cursor-pointer">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-bell"
                aria-hidden="true"
              >
                <path d="M10.268 21a2 2 0 0 0 3.464 0"></path>
                <path d="M3.262 15.326A1 1 0 0 0 4 17h16a1 1 0 0 0 .74-1.673C19.41 13.956 18 12.499 18 8A6 6 0 0 0 6 8c0 4.499-1.411 5.956-2.738 7.326"></path>
              </svg>
            </button>
          </div>
        </nav>
      </div>


      {/* main home */}
      <section
        dir="rtl"
        className={`pt-3 md:pt-6 pb-20 relative`}
      >
        <img src="/logo.png" alt="" className='w-[200px] mx-auto' />
        <div className="mx-auto flex max-w-5xl flex-col items-center px-4 text-center mb-10">
          <div className='py-[5px] '>
            <h2
              className="hidden md:visible mb-3 text-[18px] md:text-[20px] leading-[1.3] font-semibold text-[#ecbe02]"
              style={{ textShadow: '1px 3px 4px rgba(0,0,0,0.11)' }}
            >

              أنت في المكان الصحيح إذا كنت تبحث عن
            </h2>
            <h1 className="text-[24px] font-[600] text-[#403230]">
              إبحث عن عقارك
            </h1>
          </div>

          <form className="mt-[32px] w-full max-w-[355px] mx-auto rounded-xl border border-[#e4e4e4] bg-white p-[24px] flex flex-col gap-[12px]"
            style={{ boxShadow: 'rgba(0, 0, 0, 0.2) 0px 0px 14px 0px' }}>
            <div>
              <div className="relative mb-3">
                <select
                  className="min-h-[48px] py-[8px] px-[16px] w-full rounded-full border border-[#e2e2e2] bg-white px-4 text-right text-[14px] text-[#4f4f4f] outline-none appearance-none"
                  defaultValue=""
                  style={{ WebkitAppearance: 'none', MozAppearance: 'none' }}
                >
                  <option value="" disabled className="text-gray-400 hidden">اختر المناطق</option>
                  {/* محافظة حولي - مناطق */}
                  <option value="محافظة حولي" disabled className='px-4  py-2 text-xs font-bold text-gray-400 uppercase tracking-wider bg-gray-50/50 top-0 z-10 text-right'>محافظة حولي</option>
                  <option value="السالمية">السالمية</option>
                  <option value="الرميثية">الرميثية</option>
                  <option value="السلام">السلام</option>
                  <option value="سلوى">سلوى</option>
                  <option value="الجابرية">الجابرية</option>
                  <option value="حولي">حولي</option>
                  <option value="الزهراء">الزهراء</option>
                  <option value="الصديق">الصديق</option>
                  <option value="الشهداء">الشهداء</option>
                  <option value="بيان">بيان</option>
                  <option value="مشرف">مشرف</option>
                  <option value="حطين">حطين</option>
                  <option value="غرب مشرف – مبارك العبدالله">غرب مشرف – مبارك العبدالله</option>
                  <option value="الشعب السكنية">الشعب السكنية</option>
                  <option value="البدع">البدع</option>
                  <option value="ميدان حولي">ميدان حولي</option>
                  <option value="الشعب البحري">الشعب البحري</option>

                  {/* محافظة مبارك الكبير */}
                  <option value="محافظة حولي" disabled className='px-4  py-2 text-xs font-bold text-gray-400 uppercase tracking-wider bg-gray-50/50 top-0 z-10 text-right'>محافظة مبارك الكبير</option>
                  <option value="ابو فطيرة">ابو فطيرة</option>
                  <option value="الفنيطيس">الفنيطيس</option>
                  <option value="المسايل">المسايل</option>
                  <option value="صباح السالم">صباح السالم</option>
                  <option value="العدان">العدان</option>
                  <option value="مبارك الكبير">مبارك الكبير</option>
                  <option value="القصور">القصور</option>
                  <option value="ابو الحصانية">ابو الحصانية</option>
                  <option value="المسيلة">المسيلة</option>
                  <option value="اسواق القرين – غرب ابو فطيرة الصناعية">اسواق القرين – غرب ابو فطيرة الصناعية</option>
                  <option value="صبحان">صبحان</option>
                  <option value="اسواق القرين - غرب ابو فطيره الحريفية">اسواق القرين - غرب ابو فطيره الحريفية</option>

                  {/* محافظة العاصمة - مناطق */}
                  <option value="محافظة العاصمة" disabled className='px-4  py-2 text-xs font-bold text-gray-400 uppercase tracking-wider bg-gray-50/50 top-0 z-10 text-right'>محافظة العاصمة</option>
                  <option value="القرين">القرين</option>
                  <option value="جابر الاحمد">جابر الاحمد</option>
                  <option value="السرة">السرة</option>
                  <option value="الشويخ الصناعية">الشويخ الصناعية</option>
                  <option value="شمال غرب الصليبيخات">شمال غرب الصليبيخات</option>
                  <option value="الروضة">الروضة</option>
                  <option value="الفيحاء">الفيحاء</option>
                  <option value="شرق">شرق</option>
                  <option value="القادسية">القادسية</option>
                  <option value="القبلة – جبلة">القبلة – جبلة</option>
                  <option value="النزهة">النزهة</option>
                  <option value="المرقاب">المرقاب</option>
                  <option value="الشامية">الشامية</option>
                  <option value="غرناطة">غرناطة</option>
                  <option value="قرطبة">قرطبة</option>
                  <option value="مدينة الكويت – كيفان">مدينة الكويت – كيفان</option>
                  <option value="الخالدية">الخالدية</option>
                  <option value="العديلية">العديلية</option>
                  <option value="بنيد القار">بنيد القار</option>
                  <option value="عبدالله السالم">عبدالله السالم</option>
                  <option value="الصليبيخات">الصليبيخات</option>
                  <option value="الدسمة">الدسمة</option>
                  <option value="ضاحية حصة مبارك">ضاحية حصة مبارك</option>
                  <option value="الدعية">الدعية</option>
                  <option value="الدوحة">الدوحة</option>
                  <option value="اليرموك">اليرموك</option>
                  <option value="الدسمن">الدسمن</option>
                  <option value="المباركية">المباركية</option>
                  <option value="المنصورية">المنصورية</option>
                  <option value="النهضة">النهضة</option>
                  <option value="الشويخ السكنية">الشويخ السكنية</option>
                  <option value="كيفان">كيفان</option>
                  <option value="القيروان">القيروان</option>
                  <option value="الشرق">الشرق</option>

                  {/* محافظة الاحمدي - مناطق */}
                  <option value="محافظة الاحمدي" disabled className='px-4  py-2 text-xs font-bold text-gray-400 uppercase tracking-wider bg-gray-50/50 top-0 z-10 text-right'>محافظة الاحمدي</option>
                  <option value="صباح الاحمد السكنية">صباح الاحمد السكنية</option>
                  <option value="العقيلة">العقيلة</option>
                  <option value="الصباحية">الصباحية</option>
                  <option value="المنقف">المنقف</option>
                  <option value="المهبولة">المهبولة</option>
                  <option value="الفنطاس">الفنطاس</option>
                  <option value="الوفرة السكنية">الوفرة السكنية</option>
                  <option value="فهد الاحمد">فهد الاحمد</option>
                  <option value="هدية">هدية</option>
                  <option value="الاحمدي">الاحمدي</option>
                  <option value="علي صباح السالم – ام الهيمان">علي صباح السالم – ام الهيمان</option>
                  <option value="جابر العلي">جابر العلي</option>
                  <option value="ابو حليفة">ابو حليفة</option>
                  <option value="الفحيحيل">الفحيحيل</option>
                  <option value="الخيران السكنية – جهة البر">الخيران السكنية – جهة البر</option>
                  <option value="الظهر">الظهر</option>
                  <option value="الجليعة">الجليعة</option>
                  <option value="مدينة صباح الاحمد البحرية – الخيران">مدينة صباح الاحمد البحرية – الخيران</option>
                  <option value="صباح الاحمد البحرية">صباح الاحمد البحرية</option>
                  <option value="صباح الاحمد البحرية الخيران">صباح الاحمد البحرية الخيران</option>
                  <option value="الرقعة">الرقعة</option>
                  <option value="الوفرة الزراعية">الوفرة الزراعية</option>
                  <option value="الزور">الزور</option>
                  <option value="النويصيب">النويصيب</option>
                  <option value="بنيدر">بنيدر</option>
                  <option value="الشعيبة الصناعية">الشعيبة الصناعية</option>
                  <option value="ميناء عبدالله">ميناء عبدالله</option>
                  <option value="الدببية">الدببية</option>
                  <option value="جنوب صباح الاحمد">جنوب صباح الاحمد</option>
                  <option value="اسطبلات الاحمدي">اسطبلات الاحمدي</option>
                  <option value="الخيران السكنية - جانب البرى">الخيران السكنية - جانب البرى</option>
                  <option value="الضباعية">الضباعية</option>
                  <option value="شرق الرقة">شرق الرقة</option>
                  <option value="محافظة الأحمدي" disabled className='px-4  py-2 text-xs font-bold text-gray-400 uppercase tracking-wider bg-gray-50/50 top-0 z-10 text-right'>محافظة الأحمدي</option>
                  <option value="ساحل صباح الأحمد – الخيران">ساحل صباح الأحمد – الخيران</option>

                  {/* محافظة الفروانية */}
                  <option value="محافظة الفروانية" disabled className='px-4  py-2 text-xs font-bold text-gray-400 uppercase tracking-wider bg-gray-50/50 top-0 z-10 text-right'>محافظة الفروانية</option>
                  <option value="الفروانية">الفروانية</option>
                  <option value="جنوب عبدالله المبارك">جنوب عبدالله المبارك</option>
                  <option value="غرب عبدالله المبارك">غرب عبدالله المبارك</option>
                  <option value="جنوب خيطان الجديدة">جنوب خيطان الجديدة</option>
                  <option value="الاندلس">الاندلس</option>
                  <option value="العمرية">العمرية</option>
                  <option value="الري">الري</option>
                  <option value="العارضية">العارضية</option>
                  <option value="إشبيلية">إشبيلية</option>
                  <option value="عبدالله المبارك – غرب جليب">عبدالله المبارك – غرب جليب</option>
                  <option value="العارضية الصناعية">العارضية الصناعية</option>
                  <option value="صباح الناصر">صباح الناصر</option>
                  <option value="الرُقعي">الرُقعي</option>
                  <option value="خيطان">خيطان</option>
                  <option value="الرابية">الرابية</option>
                  <option value="الرحاب">الرحاب</option>
                  <option value="الضجيج">الضجيج</option>
                  <option value="الفردوس">الفردوس</option>
                  <option value="اسطبلات الفروانية">اسطبلات الفروانية</option>
                  <option value="اشبيلية">اشبيلية</option>
                  <option value="الحرفى - العريضية الصناعية">الحرفى - العريضية الصناعية</option>
                  <option value="جليب الشيوخ - الحساوي">جليب الشيوخ - الحساوي</option>

                  {/* محافظة الجهراء */}
                  <option value="محافظة الجهراء" disabled className='px-4  py-2 text-xs font-bold text-gray-400 uppercase tracking-wider bg-gray-50/50 top-0 z-10 text-right'>محافظة الجهراء</option>
                  <option value="المطلاع">المطلاع</option>
                  <option value="سعد العبدالله">سعد العبدالله</option>
                  <option value="الجهراء القديمة">الجهراء القديمة</option>
                  <option value="النسيم">النسيم</option>
                  <option value="العيون">العيون</option>
                  <option value="الواحة">الواحة</option>
                  <option value="امغرة الصناعية">امغرة الصناعية</option>
                  <option value="الهجن">الهجن</option>
                  <option value="جنوب سعد العبدالله">جنوب سعد العبدالله</option>
                  <option value="الجهراء">الجهراء</option>
                  <option value="النعيم">النعيم</option>
                  <option value="تيماء">تيماء</option>
                  <option value="القصر">القصر</option>
                  <option value="الخويسات">الخويسات</option>
                  <option value="الصبية">الصبية</option>
                  <option value="العبدلي">العبدلي</option>
                  <option value="مزارع العبدلي">مزارع العبدلي</option>
                  <option value="كبد">كبد</option>
                  <option value="الجهراء الصناعية">الجهراء الصناعية</option>
                  <option value="الصليبية">الصليبية</option>
                  <option value="إسطبلات الجهراء">إسطبلات الجهراء</option>
                  <option value="الناعم السالمي">الناعم السالمي</option>
                  <option value="عيون اصطبلات الجهراء">عيون اصطبلات الجهراء</option>
                  <option value="الهجن">الهجن</option>
                  <option value="الجهراء قصر">الجهراء قصر</option>
                  <option value="الصليبية">الصليبية</option>
                  <option value="العبدلي الزراعية">العبدلي الزراعية</option>
                  <option value="عبدلي فارم">عبدلي فارم</option>
                </select>
                <IoChevronDown className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-[#8f8f8f]" size={18} />
              </div>
            </div>



            <div>
              <div className="relative mb-3">
                <select
                  id="property-type"
                  defaultValue=""
                  className="min-h-[48px] py-[8px] px-[16px] w-full rounded-full border border-[#e2e2e2] bg-white px-4 text-right text-[14px] text-[#4f4f4f] outline-none appearance-none"
                  style={{ WebkitAppearance: 'none', MozAppearance: 'none' }}
                >
                  <option value="" disabled className="text-gray-400 hidden">جميع أنواع العقارات</option>
                  <option value="floor">شقة</option>
                  <option value="floor">دور</option>
                  <option value="house">بيت</option>
                  <option value="duplex">دوبلكس</option>
                  <option value="land">ارض</option>
                  <option value="building">عمارة</option>
                  <option value="chalet">شاليه</option>
                  <option value="farm">مزرعة</option>
                  <option value="commercial">تجاري</option>
                  <option value="storage">مخزن</option>
                </select>
                <IoChevronDown className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-[#8f8f8f]" size={18} />
              </div>

            </div>
            <div className="mb-3 flex items-center justify-center gap-[8px]">
              {purposeOptions.map((option) => {
                const isActive = activePurpose === option.id
                return (
                  <button
                    key={option.id}
                    type="button"
                    onClick={() => setActivePurpose(option.id)}
                    className={`px-[20px] py-[8px] rounded-[50px] border-[1.5] border-[#e0e0e0] text-[14px] font-semibold cursor-pointer transition-colors ${isActive
                      ? 'border-[#00A8A8] bg-[#00A8A8] text-[#2d2423]'
                      : 'border-[#dfdfdf] bg-white text-[#4f4f4f] hover:bg-[#00A8A8] hover:border-[#00A8A8] hover:text-[#2d2423]'
                      }`}
                  >
                    {option.label}
                  </button>
                )
              })}
            </div>

            <button
              type="submit"
              className="p-[14px] w-full rounded-[50px] bg-[#00A8A8] text-[#403230] text-[16px] font-[700] cursor-pointer transition-opacity hover:opacity-90"
            >
              ابحث الآن
            </button>
          </form>
        </div>





        <section className={`py-8 absolute w-full mx-auto px-4 md:px-15`} dir="rtl">
          <div className="mx-auto">

            <div
              className="relative overflow-hidden rounded-2xl border border-[#d7d7d7]"
              style={{
                backgroundImage: "url('/background.png')",
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
                boxShadow: 'rgba(0, 0, 0, 0.35) 0px 4px 20px 2px',
              }}
            >
              <div className="absolute inset-0 bg-black/60" />

              <div className="relative z-10">

                {/* TOP BAR (kept same, just green) */}
                <div
                  className="relative flex h-[44px] items-center justify-center bg-[url('/background.png')] bg-cover bg-center"
                  style={{ backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat' }}
                >
                  <div className="w-full h-full bg-[url('/bg.png')] bg-cover bg-center absolute top-0 right-0">
                    <div className="absolute top-0 left-0 w-full h-full bg-[#00A8A8]/40"></div>
                  </div>
                </div>

                <div className="relative px-6 pb-3 pt-4 text-white">

                  {/* LOGO */}
                  <div className="absolute right-[20px] top-[10px]">
                    <div className="flex h-[66px] md:h-[90px] md:w-[90px] w-[66px] items-center justify-center rounded-full border-2 border-[#e4dbd1] bg-white shadow overflow-hidden">
                      <img src="/image.png" alt="company" className="h-full w-auto" />
                    </div>
                  </div>

                  {/* TEXT */}
                  <div className="pr-0 pl-[0px] text-left">
                    <h3 className="mb-2 text-[20px] md:text-[42px] leading-[1.05] font-extrabold">
                      PUT YOUR AD HERE
                    </h3>
                    <p className="text-[18px] md:text-[24px] leading-[1.35] font-semibold text-[#fff4c2]">
                      8005 9007 965+
                    </p>
                  </div>

                  {/* BUTTONS */}
                  <div className="mt-4 grid grid-cols-2 gap-3">
                    <a
                      href="https://wa.me/96590078005"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex h-11 items-center justify-center gap-2 rounded-xl bg-[#00A8A8] text-[15px] md:text-[24px] font-bold text-[#2f241f] no-underline"
                    >
                      <IoLogoWhatsapp size={22} />
                      واتساب
                    </a>

                    <a
                      href="tel:+96590078005"
                      className="flex h-11 items-center justify-center gap-2 rounded-xl border border-[#756f66] bg-[#ffffff14] text-[15px] md:text-[24px] font-bold text-white backdrop-blur-[1px] no-underline"
                    >
                      <IoCallOutline size={22} />
                      اتصال
                    </a>
                  </div>

                </div>
              </div>
            </div>

          </div>
        </section>

      </section>


      <section className={`pt-[200px] md:pt-[250px] px-4 w-full pb-20`} dir="rtl">
        <div className="mx-auto max-w-4xl">
          <div className="mb-4">
            <h2 className="text-center text-[20px] font-bold text-[#06152d]">أحدث الإعلانات</h2>
          </div>

          <div className="flex flex-col gap-2">
            {featuredCards.map((card) => (
              <article key={card.id} className="overflow-hidden group relative mb-2 flex h-auto cursor-pointer select-none flex-col rounded-[14px] bg-white py-0 transition-all duration-200 hover:bg-gray-50/50 active:scale-[0.99] active:bg-gray-50/50 md:rounded-[10px] md:border md:border-gray-200 md:bg-white relative" style={{ boxShadow: 'rgba(0, 0, 0, 0.2) 0px 0px 14px 0px' }}>
                <div className="absolute top-2 left-2 rounded-full z-20 bg-[#19B1B1] px-2.5 py-1 text-[11px] font-bold tracking-tight text-white md:top-0 md:right-0 md:left-auto md:rounded-xs md:px-2 md:py-0.5 md:text-[10px] uppercase sm:text-[11px]">
                  مميز
                </div>

                <div className="flex w-full min-h-[118px] flex-row md:min-h-[150px]">
                  <div className="relative w-[120px] shrink-0 self-stretch md:w-[150px] flex items-center justify-center p-0">
                    <div className="relative w-full h-full overflow-hidden bg-[#dfe7e7] md:m-0 md:h-full md:w-full md:rounded-none md:bg-transparent">
                      <img alt={card.title} src={card.image} className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105 md:object-cover md:opacity-100" />
                    </div>
                  </div>

                  <div className="flex flex-1 flex-col justify-between overflow-hidden px-2 py-3 md:px-4">
                    <div className="flex-1">
                      <div className="mb-1 flex items-start justify-between gap-2">
                        <div className="flex min-w-0 flex-1 items-center gap-1 text-[#0f7f86]">
                          <RiMoneyDollarCircleLine className="shrink-0 text-[#029a9d]" size={13} />
                          <span className="whitespace-nowrap text-[15px] font-bold text-[#111827] md:text-[16px]">{card.price}</span>
                        </div>
                      </div>
                      <h3 className="line-clamp-1 text-[15px] font-bold md:mt-2 md:mb-1 md:line-clamp-2 md:text-[16px] text-[#00A8A8]">{card.title}</h3>
                      <p className="mt-1 line-clamp-2 text-[12px] leading-snug text-[#55626b] md:mt-4 md:text-[14px] md:text-gray-600">{card.description}</p>
                    </div>

                    <div className="mt-auto">
                      <div className="mt-2 mb-1.5 flex items-center justify-start gap-1 text-[#55626b] md:mt-6 md:text-gray-500">
                        <IoTimeOutline className="text-[#029a9d]" size={12} />
                        <span className="text-[11px] font-medium">{card.time}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section >


      <nav className="lg:hidden fixed bottom-0 left-0 right-0 bg-white/80 backdrop-blur-lg flex items-center justify-around py-2 z-50 rounded-t-[25px] shadow-[0_-8px_30px_rgba(0,0,0,0.06)] h-[4.5rem] border-t border-gray-100/50 grid grid-cols-5">

        <a className="relative flex flex-col items-center gap-1.5 py-1 px-3 rounded-2xl transition-all duration-300 text-primary-blue" href="/">
          <div className="absolute inset-0" style={{ opacity: 1 }}></div>
          <div className="z-10" tabIndex={0} style={{ transform: "translateY(-2px) scale(1.1)" }}>
            <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-house" aria-hidden="true">
              <path d="M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8"></path>
              <path d="M3 10a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
            </svg>
          </div>
          <span className="text-[10px] z-10 font-bold transition-all duration-300 text-primary-blue opacity-100">الرئيسية</span>
        </a>

        <a className="relative flex flex-col items-center gap-1.5 py-1 px-3 rounded-2xl transition-all duration-300 text-[#555555] hover:text-[#555555]" href="/offices">
          <div className="z-10" tabIndex={0} style={{ transform: "none" }}>
            <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-map-pin" aria-hidden="true">
              <path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path>
              <circle cx="12" cy="10" r="3"></circle>
            </svg>
          </div>
          <span className="text-[10px] z-10 font-bold transition-all duration-300 text-[#555555]">المكاتب</span>
        </a>

        <div className="flex items-center justify-center -translate-y-[3px]">
          <button className="focus:outline-none group" tabIndex={0}>
            <div className="flex justify-center w-[44px] h-[44px] rounded-full cursor-pointer transition-all duration-300">
              <div className="flex items-center justify-center w-[40px] h-[40px] rounded-full border border-black/20">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-plus text-gray-900" aria-hidden="true">
                  <path d="M5 12h14"></path>
                  <path d="M12 5v14"></path>
                </svg>
              </div>
            </div>
          </button>
        </div>

        <a className="relative flex flex-col items-center gap-1.5 py-1 px-3 rounded-2xl transition-all duration-300 text-[#555555] hover:text-[#555555]" href="/account">
          <div className="z-10" tabIndex={0} style={{ transform: "none" }}>
            <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-user" aria-hidden="true">
              <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path>
              <circle cx="12" cy="7" r="4"></circle>
            </svg>
          </div>
          <span className="text-[10px] z-10 font-bold transition-all duration-300 text-[#555555]">حسابي</span>
        </a>

        <a className="relative flex flex-col items-center gap-1.5 py-1 px-3 rounded-2xl transition-all duration-300 text-[#555555] hover:text-[#555555]" href="/menu">
          <div className="z-10" tabIndex={0} style={{ transform: "none" }}>
            <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-menu" aria-hidden="true">
              <path d="M4 12h16"></path>
              <path d="M4 18h16"></path>
              <path d="M4 6h16"></path>
            </svg>
          </div>
          <span className="text-[10px] z-10 font-bold transition-all duration-300 text-[#555555]">القائمة</span>
        </a>
      </nav>
    </div >
  )
}

export default page