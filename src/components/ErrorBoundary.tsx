import { Component, ReactNode, ErrorInfo } from 'react';

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
  error?: Error;
}

export default class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    if (process.env.NODE_ENV !== 'production') {
      console.error('ErrorBoundary caught an error:', error, errorInfo);
    }
  }

  handleReset = () => {
    this.setState({ hasError: false });
    window.location.href = '/';
  };

  render() {
    if (this.state.hasError) {
      return (
        <div
          id="error-boundary-screen"
          className="min-h-screen bg-[#0d1322] text-[#dde2f8] flex flex-col items-center justify-center px-4 py-16 text-center"
          dir="rtl"
        >
          <div className="w-full max-w-md p-6 sm:p-8 rounded-3xl bg-[#151b2b] border border-[#242a3a] shadow-2xl flex flex-col items-center">
            <div className="w-14 h-14 rounded-2xl bg-[#ffb4ab]/10 text-[#ffb4ab] border border-[#ffb4ab]/30 flex items-center justify-center mb-4">
              <span className="material-symbols-outlined text-[30px]">error_outline</span>
            </div>
            <h2 className="text-xl font-bold text-[#dde2f8] mb-2">حدث خطأ غير متوقع</h2>
            <p className="text-xs sm:text-sm text-[#bdc8d1] mb-6 leading-relaxed">
              حدث خطأ أثناء تحميل هذه الصفحة. يرجى إعادة المحاولة أو العودة إلى الصفحة الرئيسية.
            </p>
            <button
              type="button"
              onClick={this.handleReset}
              className="px-6 py-3 min-h-[44px] rounded-xl bg-[#8ed5ff] text-[#00354a] font-bold text-sm hover:bg-[#c4e7ff] active:scale-95 transition-all cursor-pointer"
            >
              إعادة تحميل الصفحة
            </button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}
