export interface Book {
    _id: string;
    book_id: string;
    author: string;
    title: string;
    coverImage: string;
    genre: string;
    language: string;
    format: "Ebook" | "Audio" | "Video";
    summary: string;
    audioLink?: string;
    videoLink?: string;
    ebookFile?: string;
    status: string;
    createdAt: Date;
  }
  
  export interface User {
    name: string;
    email: string;
    password: string;
    country: string;
    contact: string;
    otp?: string;
  }
  
  export interface BookDetailModalProps {
    book: Book;
    onClose: () => void;
  }
  
  export interface Publisher {
    id: number;
    name: string;
    email: string;
    description: string;
    totalbooks: number;
    contact: string;
    country: string;
    date: string;
  }
  
  export interface ModalProps {
    isOpen: boolean;
    publisher: Publisher | null;
    onClose: () => void;
  }
  
  export interface Reader {
    id: number;
    name: string;
    email: string;
    contact: string;
    country: string;
    date: string;
  }
  
  export interface ReaderapprovedModelProps {
    isOpen: boolean;
    onClose: () => void;
    selectedReader: Reader | null;
  }
  
  export interface ReaderpendingModelProps {
    isOpen: boolean;
    onClose: () => void;
    selectedReader: Reader | null;
  }
  
  export interface ReaderrejectedModelProps {
    isOpen: boolean;
    onClose: () => void;
    selectedReader: Reader | null;
  }
  
  export interface AuthState {
    user: User | null;
    token: string | null;
    isAuthenticated: boolean;
  }
  
  export interface AuthResponse {
    user: User;
    token: string;
  }
  
  export interface UserLogin {
    email: string;
    password: string;
  }
  