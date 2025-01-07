import React from 'react';
import s from "../assets/found/s.png"
import s1 from "../assets/found/s1.png"
import s3 from "../assets/found/s3.png"
import s5 from "../assets/found/s5.png"
import s6 from "../assets/found/s6.png"
import s7 from "../assets/found/s7.png"
import s9 from "../assets/found/s9.png"
import s10 from "../assets/found/s10.png"
import s11 from "../assets/found/s11.png"
import s13 from "../assets/found/s13.png"
import s14 from "../assets/found/s14.png"
import s15 from "../assets/found/s15.png"
import r1 from "../assets/TradeWithConfidence/r1.png"
import r2 from "../assets/TradeWithConfidence/r2.png"
import r3 from "../assets/TradeWithConfidence/r3.png"
import r4 from "../assets/TradeWithConfidence/r4.png"
import r5 from "../assets/TradeWithConfidence/r5.png"
import d1 from "../assets/Discount/d1.png"
import d2 from "../assets/Discount/d2.png"
import d3 from "../assets/Discount/d3.png"
import cc1 from "../assets/cuntrey/am.png"
import cc2 from "../assets/cuntrey/c1.png"
import cc3 from "../assets/cuntrey/co.png"
import cc4 from "../assets/cuntrey/it.png"
import cc5 from "../assets/cuntrey/ro.png"
import cc6 from "../assets/cuntrey/tu.png"
import cc7 from "../assets/cuntrey/vet.png"
import { GiArrowDunk } from "react-icons/gi";
import { FaAddressCard } from "react-icons/fa";
import { FaHandshake } from "react-icons/fa";
import { IoBarChartSharp } from "react-icons/io5";
import { LuSearch } from "react-icons/lu";
import { FiCheckCircle } from "react-icons/fi";
import { TbMobiledata } from "react-icons/tb";
import { TbWorldPin } from "react-icons/tb";
import { BsPersonGear } from "react-icons/bs";

export interface  IHeroCardData  {
    icon:any
    h2:string
    p:string
    a:string
}
export interface  IBoxSliderData  {
    icon:any
    p:string
}
export interface  IImgSliderData  {
    mainImg:any
    img1:any
    img2:any
}
export interface  IMatchesData {
    icon:any
    h2:string
    p:string
}

export interface  IEmpoweringCompaniesData {
    img:any
    name:string

}
export interface  IFooterData {
    h2:string
    ul:string[]
}
export interface  IDiscountsAndServices {
    img:any
    h2:string
    p:string
    span:string
}

// ###########################################################
export const HeroCardData : IHeroCardData[] = [
    {
        icon:GiArrowDunk,
        h2:"ملايين عروض الأعمال",
        p:"استكشف منتجات ومورِّدين لشركتك من ملايين العروض بجميع أنحاء العالم.",
        a:"Categories"
    },
    {
        icon:FaAddressCard,
        h2:"جودة ومعاملات محمية بضمان",
        p:"اضمن جودة الإنتاج من مورِّدين معتمَدين، مع حماية طلباتك منذ لحظة الدفع حتى التسليم.",
        a:""
    },
    {
        icon:FaHandshake,
        h2:"حلول تداول تجاري بمكان واحد",
        p:"تمتع بإتمام طلبات بسلاسة من لحظة البحث عن المنتج/المورِّد مرورًا بإدارة الطلب والدفع وصولاً إلى تنفيذ الطلب.",
        a:""
    },
    {
        icon:IoBarChartSharp,
        h2:"تجربة تداول تجاري مصممة لك خصيصًا",
        p:"احصل على مزايا منتقاة بعناية، كخصومات حصرية وحماية معززة ودعم إضافي، للمساعدة في تنمية نشاطك التجاري بكل خطوة طوال رحلتك.",
        a:""
    }
] 
export const BoxSliderData : IBoxSliderData[] = [
    {
        icon:GiArrowDunk,
        p:"الأدوات والمعدات"
    },
    {
        icon:GiArrowDunk,
        p:"الآلات الصناعية"
    },
    {
        icon:GiArrowDunk,
        p:"الأثاث"
    },
    {
        icon:GiArrowDunk,
        p:"قطع غيار المركبات وإكسسواراتها"
    },
    {
        icon:GiArrowDunk,
        p:"الساعات والمجوهرات والنظارات"
    },
    {
        icon:GiArrowDunk,
        p:"الأم ، الاطفال واللعب"
    },
    {
        icon:GiArrowDunk,
        p:"الأحذية وإكسسواراتها"
    },
    {
        icon:GiArrowDunk,
        p:"التغليف والطباعة"
    },
    {
        icon:GiArrowDunk,
        p:"المعدات والآلات التجارية"
    },
    {
        icon:GiArrowDunk,
        p:"الجمال"
    },
    {
        icon:GiArrowDunk,
        p:"الرياضة والترفيه"
    },
    {
        icon:GiArrowDunk,
        p:"المنزل والحديقة"
    },
    {
        icon:GiArrowDunk,
        p:"الإلكترونيات الاستهلاكية"
    },
    {
        icon:GiArrowDunk,
        p:"الأقمشة والمواد الخام النسيجية"
    },
    {
        icon:GiArrowDunk,
        p:"اختبار"
    },
    {
        icon:GiArrowDunk,
        p:"الإنشاءات والعقارات"
    },
    {
        icon:GiArrowDunk,
        p:"الأجهزة المنزلية"
    },
    {
        icon:GiArrowDunk,
        p:"الأمتعة والحقائب والشنط"
    },
    {
        icon:GiArrowDunk,
        p:"المركبات والنقل"
    },
    {
        icon:GiArrowDunk,
        p:"الشخصية الرعاية و التنظيف المنزلية"
    },
    {
        icon:GiArrowDunk,
        p:"إكسسوارات السيارات والإلكترونيات والأدوات"
    },
    {
        icon:GiArrowDunk,
        p:"المصابيح والإضاءة"
    },
    {
        icon:GiArrowDunk,
        p:"الهدايا والمصنوعات اليدوية"
    },
    {
        icon:GiArrowDunk,
        p:"الرعاية الصحية"
    },
    {
        icon:GiArrowDunk,
        p:"الطاقة المتجددة"
    },
    {
        icon:GiArrowDunk,
        p:"البناء و آلات البناء"
    },
    {
        icon:GiArrowDunk,
        p:"المعدات والمستلزمات الكهربائية"
    },
    {
        icon:GiArrowDunk,
        p:"المستلزمات المكتبية والمدرسية"
    },
    {
        icon:GiArrowDunk,
        p:"أطعمة ومشروبات"
    },
    {
        icon:GiArrowDunk,
        p:"أجهزة ومستلزمات طبية"
    },
    {
        icon:GiArrowDunk,
        p:"البيئة"
    },
    {
        icon:GiArrowDunk,
        p:"البيئة"
    },
]

export const  ImgSliderData : IImgSliderData[] = [
{
    mainImg:s,
    img1:s1,
    img2:s3,
},
{
    mainImg:s5,
    img1:s6,
    img2:s7,
},
{
    mainImg:s9,
    img1:s10,
    img2:s11,
},
{
    mainImg:s13,
    img1:s14,
    img2:s15,
},

]
export const  MatchesData : IMatchesData[] = [
    {
        icon:LuSearch,
        h2:" البحث عن مطابقات",
        p:"قم بالبحث في ملايين عروض المنتجات والمورِّدين وقم بتصفيتها للعثور على المطابق منها لشركتك.",
    },
    {
        icon:FiCheckCircle,
        h2:" تعرَّف على الأنسب",
        p:"تمكن من تقييم جودة المنتج وقدرات المورِّدين بسهولة وكفاءة من خلال عمليات الفحص المعتَمدة وأدوات الشراء الرقمية.",
    },
    {
        icon:TbWorldPin,
        h2:"تمتع بالدفع بثقة",
        p:"ادفع مقابل طلبك بأكثر من 20 عملة من خلال 20+ طريقة دفع متعددة وآمنة، بما في ذلك شروط الدفع المرنة.",
    },
    {
        icon:TbMobiledata,
        h2:" تمكَّن من التنفيذ بشفافية",
        p:" تمكَّن من تلبية احتياجاتك اللوجستية بفضل حلول مخصصة في سوق لوجستيات Alibaba.com‏، مع تتبع في الوقت الحقيقي لأكثر من 26,000 مسار عبر 220 بلدًا ومنطقة، وكلها مدعومة من لوجستيات Alibaba.com.",
    },
    {
        icon:BsPersonGear,
        h2:" الإدارة بسهولة",
        p:"تحقق من حالة الطلب، وقم بإدارة المورِّدين، وتتبع المدفوعات والشحنات، وتواصل لأجل دعم ما بعد وكل ذلك عبر .",
    },
]
export const  MatchesImgData :any [] = [
    {
        img:r1
    },
    {
        img:r2
    },
    {
        img:r3
    },
    {
        img:r4
    },
    {
        img:r5
    },
]
export const DiscountsAndServicesData : IDiscountsAndServices[] = [
    {
        img:d1,
        p:"بصفتي رائدة أعمال منخرطة بعمق في صناعة منتجات التجميل، لطالما كرست نفسي تمامًا لابتكار منتجاتي الأصلية. وقد ظلت tefaStore.com دائمًا شريكي الموثوق به في هذه العملية.",
        h2:"Eva Jane",
        span:"مؤسِّسة Eva Jane Beauty"
    },
    {
        img:d2,
        p:"وبمجرد اكتشافي tefaStore.com، أدهشني الكم الهائل للغاية لعدد الخيارات التي أتيحت لي مع مورِّدين من جميع أنحاء العالم.",
        h2:"Dr. Sayed Ibrihim",
        span:"مؤسِّس SprinJene"
    },
    {
        img:d3,
        p:"لقد غيَّرت tefaStore.com قواعد اللعبة للشركات الصغيرة كشركتنا. فقد تمكَّنا من العثور على المنتج الذي نحتاجه بالضبط، ولا أعتقد أنه كان بإمكاننا شراء أي شيء بدون Alibaba.com",
        h2:"رون ويليامز وتونجا ويليامز",
        span:"مؤسس شركة Ron Williams Fitness ومديرها التنفيذي (على التوالي)"
    },
]
export const EmpoweringCompaniesData : IEmpoweringCompaniesData[] = [
    {
        img:cc1,
        name:"ماليزيا"
    },
    {
        img:cc2,
        name:"اليابان"
    },
    {
        img:cc3,
        name:"كوريا الجنوبية"
    },
    {
        img:cc4,
        name:"إيطاليا"
    },
    {
        img:cc5,
        name:"روسيا"
    },
    {
        img:cc6,
        name:"تركيا"
    },
    {
        img:cc7,
        name:"فيتنام"
    },
]
export const FooterData : IFooterData[] = [
    {
        h2:"Get support",
        ul:["Help Center","Live chat","Check order status","Refunds","Report abuse"]
    },
    {
        h2:"Payments and protections",
        ul:["Safe and easy payments","Money-back policy","On-time shipping","After-sales protections","Product monitoring services"]
    },
    {
        h2:"Source on Alibaba.com",
        ul:["Request for Quotation","Membership program","Alibaba.com Logistics","Sales tax and VAT","Alibaba.com Reads"]
    },
    {
        h2:"Sell on Alibaba.com",
        ul:["Start selling","Seller Central","Become a Verified Supplier","Partnerships","Download the app for suppliers"]
    },
    {
        h2:"   Get to know us",
        ul:["About Alibaba.com","Corporate responsibility","News center","Careers"]
    },
]











