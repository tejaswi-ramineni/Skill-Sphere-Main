# 🎯 Skill Sphere

Skill Sphere is a modern, AI-powered learning platform that helps users create, manage, and consume educational content with intelligent course generation and personalized learning experiences.

## 🚀 Features

### 🔹 AI-Powered Course Creation
- Generate comprehensive course content using Google's Generative AI
- Intelligent course structure and chapter organization
- Dynamic content generation based on user requirements

### 🔹 Interactive Learning Experience
- Real-time course progress tracking
- Chapter-based learning with markdown content support
- YouTube video integration for enhanced learning

### 🔹 Modern User Interface
- Clean, responsive design built with Next.js and Tailwind CSS
- Beautiful UI components using shadcn/ui and Radix UI
- Smooth animations and transitions

### 🔹 Secure Authentication
- User authentication and session management with Clerk
- Protected routes and user-specific content
- Profile management and user preferences

### 🔹 Database Management
- Serverless PostgreSQL database with Neon
- Efficient data handling using Drizzle ORM
- Scalable and reliable data storage

### 🔹 Course Management
- Create, edit, and organize courses
- Chapter management with topics and content
- Course enrollment and progress tracking

## 🛠️ Tech Stack

- **Frontend**: Next.js 15, React 18, Javascript
- **Styling**: Tailwind CSS 4, shadcn/ui, Radix UI
- **Authentication**: Clerk
- **Database**: Neon (PostgreSQL), Drizzle ORM
- **AI Integration**: Google Generative AI
- **Content**: React Markdown, React YouTube

## ✅ Getting Started

### 1. Clone the repository
```bash
git clone https://github.com/your-username/skill-sphere.git
cd skill-sphere
```

### 2. Install Dependencies
```bash
npm install
# or
yarn install
```

### 3. Set up environment variables
Create a `.env.local` file in the root directory and add the following variables:

```env
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key
CLERK_SECRET_KEY=your_clerk_secret_key
DATABASE_URL=your_neon_db_url
GENAI_API_KEY=your_google_genai_key
```

### 4. Set up the database
```bash
# Generate and run migrations
npm run db:generate
npm run db:migrate
```

### 5. Run the development server
```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## 🚀 Key Features 

### AI Course Generation
The platform uses Google's Generative AI to create comprehensive course content, including:
- Course structure and chapters
- Detailed content for each chapter
- Learning objectives and summaries

### Interactive Learning
- Real-time progress tracking
- Chapter navigation with sidebar
- Markdown content rendering
- YouTube video integration

### User Management
- Secure authentication with Clerk
- User profiles and preferences
- Course enrollment tracking
- Learning history

