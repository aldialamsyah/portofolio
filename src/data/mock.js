// Mock data for Aldi Alamsyah's Network Engineer Portfolio
// This data will be managed via GitHub by admin

export const personalInfo = {
  name: "Aldi Alamsyah",
  role: "Network Engineer",
  tagline: "Passionate about Networks, Servers, and Scalable Infrastructure",
  location: "Sindangsari, Bogor Timur 16146",
  birthDate: "Bogor, 5 Juli 2003",
  email: "aldialmsyahh@gmail.com",
  phone: "085117344404",
  linkedin: "https://www.linkedin.com/in/aldi-alamsyah-a0b7b322b",
  github: "https://aldialmsyahh9.github.io/portofolio/",
  profileSummary: "Lulusan SMK Wikrama Bogor jurusan Teknik Komputer dan Jaringan. Berpengalaman di bidang IT Support, Instalasi, dan Troubleshooting. Terbiasa bekerja di lingkungan server dan infrastruktur, memiliki kemampuan problem solving, serta terus belajar teknologi baru seperti AI."
};

export const education = [
  {
    id: 1,
    institution: "Institut Teknologi Bisnis dan Swadharma",
    degree: "Teknik Informatika",
    period: "2023 – Sekarang",
    status: "current"
  },
  {
    id: 2,
    institution: "SMK Wikrama Bogor",
    degree: "Teknik Komputer dan Jaringan",
    period: "2019 – 2022",
    status: "completed"
  }
];

export const experience = [
  {
    id: 1,
    position: "Teknisi Server & Storage",
    company: "PT. Bringin Inti Teknologi",
    period: "Februari – Juli 2025",
    current: true,
    responsibilities: [
      "Monitoring HPE ProLiant Server via Dashboard ILO Amplifier & ILO",
      "Monitoring XP8 Storage via Dashboard ISM, PA & RWC",
      "Daily reports via the ILO, ISM & PA dashboard (4 hours)",
      "Firmware upgrade (SPP), preventive maintenance, and component replacement",
      "Extend LUN, Create LUN, Attach/Detach Lun to Host Group",
      "Shift work system operations"
    ]
  },
  {
    id: 2,
    position: "Field Engineer",
    company: "PT. Kaha Duta Sarana",
    period: "Agustus – November 2024",
    current: false,
    responsibilities: [
      "Setup and maintenance POS Store Guardian (Lenovo, BM3, VynaPOS)",
      "Configuration of cashier peripherals (Scanner, Printer, Line Display)",
      "Backup Linux, Cloning Images (Acronis)",
      "Replace & dismantle old POS to new system",
      "Setup label printer (Intermec & Honeywell)"
    ]
  },
  {
    id: 3,
    position: "IT Support",
    company: "PT. Mizan Media Utama",
    period: "Agustus – November 2022",
    current: false,
    responsibilities: [
      "Troubleshooting printers and computers",
      "OS installation & setup of 15 POS units for Book Fair event",
      "CCTV wireless setup"
    ]
  }
];

export const skills = [
  {
    category: "Network & Infrastructure",
    items: ["Jaringan & Infrastruktur", "Konfigurasi WiFi", "CCTV Setup"]
  },
  {
    category: "Server & Storage",
    items: ["Server Monitoring", "Storage Monitoring", "LUN Management", "Firmware Upgrades"]
  },
  {
    category: "System Administration",
    items: ["Instalasi Windows & Linux", "Cloning & Backup (Acronis)", "Hardware Troubleshooting"]
  },
  {
    category: "Technical Support",
    items: ["IT Support", "POS System Setup", "Peripheral Configuration", "Problem Solving"]
  }
];

export const projects = [
  {
    id: 1,
    title: "Data Center Monitoring System",
    description: "Comprehensive monitoring solution for HPE ProLiant servers and XP8 storage systems using ILO Amplifier and ISM dashboards.",
    technologies: ["HPE ILO", "ISM Dashboard", "Server Monitoring"],
    period: "2025",
    status: "Production"
  },
  {
    id: 2,
    title: "POS Infrastructure Management",
    description: "Complete setup and maintenance of retail POS systems including hardware configuration and peripheral integration.",
    technologies: ["Linux Systems", "Acronis Backup", "Hardware Integration"],
    period: "2024",
    status: "Completed"
  },
  {
    id: 3,
    title: "Smart Watering System (IoT)",
    description: "IoT-based automated watering system designed and assembled during internship at PPTIK with sensor integration and automation logic.",
    technologies: ["IoT", "Sensors", "Automation", "System Design"],
    period: "2021",
    status: "Completed"
  },
  {
    id: 4,
    title: "Network Infrastructure Setup",
    description: "WiFi configuration and network infrastructure deployment for various client environments including troubleshooting and maintenance.",
    technologies: ["WiFi Configuration", "Network Setup", "Infrastructure"],
    period: "2022-2024",
    status: "Ongoing"
  }
];

export const socialLinks = [
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/aldi-alamsyah-a0b7b322b",
    icon: "linkedin"
  },
  {
    name: "GitHub",
    url: "https://github.com/aldialamsyah",
    icon: "github"
  },
  {
    name: "Email",
    url: "mailto:aldialmsyahh@gmail.com",
    icon: "mail"
  }
];