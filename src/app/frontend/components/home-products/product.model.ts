export interface Product {
  id: number | string;
  /** Card title, e.g. "HRMS Portal" */
  name: string;
  /** Short description under the title */
  description: string;
  /** Full preview image (shown uncropped) */
  image: string;
  /** Small round icon next to the title (optional, falls back to first letter) */
  icon?: string;
  /** Router link for "View Details", e.g. "/products/hrms" */
  link: string;
}
