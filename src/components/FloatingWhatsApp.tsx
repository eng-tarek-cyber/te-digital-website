export default function FloatingWhatsApp() {
  const phoneNumber = "201006494164";

  const message = encodeURIComponent(
    "مرحبًا T.E Digital، أريد الاستفسار عن خدماتكم.",
  );

  return (
    <a
      href={`https://wa.me/${phoneNumber}?text=${message}`}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="تواصل معنا عبر واتساب"
      title="تواصل معنا عبر واتساب"
      className="
        fixed
        bottom-24
        right-5
        md:bottom-5
        md:right-5
        z-50
        flex
        h-14
        w-14
        items-center
        justify-center
        rounded-full
        bg-[#25D366]
        text-white
        shadow-[0_8px_25px_rgba(37,211,102,0.35)]
        transition-all
        duration-300
        hover:scale-110
        hover:shadow-[0_10px_30px_rgba(37,211,102,0.5)]
        active:scale-95
      "
    >
      <svg
        viewBox="0 0 32 32"
        className="h-7 w-7 fill-current"
        aria-hidden="true"
      >
        <path d="M19.11 17.39c-.27-.14-1.6-.79-1.85-.88-.25-.09-.43-.14-.61.14-.18.27-.7.88-.86 1.06-.16.18-.32.2-.59.07-.27-.14-1.13-.42-2.15-1.34-.79-.7-1.32-1.56-1.47-1.83-.15-.27-.02-.42.11-.55.12-.12.27-.32.41-.48.14-.16.18-.27.27-.45.09-.18.05-.34-.02-.48-.07-.14-.61-1.47-.84-2.01-.22-.53-.45-.46-.61-.47h-.52c-.18 0-.48.07-.73.34-.25.27-.95.93-.95 2.26s.98 2.62 1.11 2.8c.14.18 1.93 2.95 4.68 4.13.65.28 1.16.45 1.56.57.65.21 1.24.18 1.71.11.52-.08 1.6-.65 1.83-1.28.23-.63.23-1.17.16-1.28-.07-.11-.25-.18-.52-.32z" />
        <path d="M16.02 3C8.84 3 3 8.84 3 16.02c0 2.3.6 4.54 1.73 6.5L3 29l6.67-1.7a12.96 12.96 0 0 0 6.35 1.65h.01C23.2 28.95 29 23.11 29 16.02 29 8.84 23.2 3 16.02 3zm0 23.78h-.01a10.8 10.8 0 0 1-5.5-1.51l-.39-.23-3.96 1.01 1.06-3.86-.25-.4a10.76 10.76 0 1 1 9.05 4.99z" />
      </svg>
    </a>
  );
}
