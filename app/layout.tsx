import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Waqas Ahmed | Junior Full-Stack Developer',
  description: 'Personal portfolio of Waqas Ahmed, Junior Full-Stack Developer building modern web applications with React.js, Next.js, Node.js, Express.js, PostgreSQL, MongoDB, Docker, and REST APIs.',
  keywords: [
    'Waqas Ahmed',
    'Junior Full-Stack Developer',
    'React.js',
    'Next.js',
    'Node.js',
    'Express.js',
    'PostgreSQL',
    'MongoDB',
    'Docker',
    'Tailwind CSS',
    'Software Engineer'
  ],
  authors: [{ name: 'Waqas Ahmed' }],
  openGraph: {
    title: 'Waqas Ahmed | Junior Full-Stack Developer',
    description: 'Developing clean, responsive, and scalable applications with PERN and MERN stacks.',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className="dark scroll-smooth h-full antialiased"
    >
      <body suppressHydrationWarning className="min-h-full flex flex-col bg-[#050505] text-white selection:bg-red-600 selection:text-white">
        {children}
      </body>
    </html>
  );
}
