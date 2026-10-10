import { Bird, BookOpen, Flag, Footprints, Sprout } from 'lucide-react'
import LotusIcon from '../components/ui/LotusIcon'

/**
 * PROPOSED badge concepts for the Digital Experience Passport.
 * These are illustrative only — not production rewards. `unlocked` values
 * drive the local demo and do not reflect any real user's progress.
 */
export const PASSPORT_BADGES = [
  {
    id: 'hoa-sen',
    name: 'Dấu ấn Hoa Sen',
    Icon: LotusIcon,
    colors: { a: '#F5BFCB', b: '#D27089', ink: '#FFFFFF' },
    unlocked: true,
    description:
      'Biểu tượng của Đồng Tháp. Dành cho hành trình ghé thăm một cánh đồng sen có tham gia chương trình và hoàn thành nhiệm vụ khám phá tại đó.',
    condition: 'Quét mã QR và hoàn thành 1 nhiệm vụ tại điểm sen tham gia.',
  },
  {
    id: 'kham-pha-thien-nhien',
    name: 'Nhà khám phá thiên nhiên',
    Icon: Bird,
    colors: { a: '#4E9C74', b: '#176B50', ink: '#FFFFFF' },
    unlocked: true,
    description:
      'Ghi nhận những bước chân đến rừng tràm, vùng đất ngập nước và các khu sinh thái — nơi thiên nhiên miền Tây hiện lên rõ nét nhất.',
    condition: 'Ghé 2 điểm sinh thái có hỗ trợ QR trong cùng một chuyến đi.',
  },
  {
    id: 'hanh-trinh-xanh',
    name: 'Hành trình xanh',
    Icon: Sprout,
    colors: { a: '#B4D8A6', b: '#5F9E62', ink: '#FFFFFF' },
    unlocked: true,
    description:
      'Dành cho những lựa chọn du lịch nhẹ nhàng với môi trường: đi bộ, đạp xe, đi xuồng và tôn trọng cảnh quan địa phương.',
    condition: 'Hoàn thành 1 nhiệm vụ "du lịch xanh" tại điểm tham gia.',
  },
  {
    id: 'dau-chan-mien-tay',
    name: 'Dấu chân miền Tây',
    Icon: Footprints,
    colors: { a: '#D2AE86', b: '#8A6142', ink: '#FFFFFF' },
    unlocked: false,
    description:
      'Mang sắc nâu phù sa của đồng bằng. Ghi dấu khi bạn đặt chân đến nhiều điểm khám phá khác nhau trên hành trình.',
    condition: 'Ghi dấu 5 điểm đến khác nhau trong Hộ chiếu.',
  },
  {
    id: 'ke-chuyen-dia-phuong',
    name: 'Người kể chuyện địa phương',
    Icon: BookOpen,
    colors: { a: '#2F6B5A', b: '#153F32', ink: '#F3E7C9' },
    unlocked: false,
    description:
      'Dành cho người lắng nghe và lan tỏa câu chuyện văn hóa, lịch sử và con người tại mỗi điểm đến.',
    condition: 'Đọc hết 3 câu chuyện địa phương tại các điểm tham gia.',
  },
  {
    id: 'thu-thach-dau-tien',
    name: 'Chinh phục thử thách đầu tiên',
    Icon: Flag,
    colors: { a: '#E2C27A', b: '#9C7631', ink: '#FFFFFF' },
    unlocked: true,
    description:
      'Khoảnh khắc mở đầu cho cuốn hộ chiếu của bạn — hoàn thành thử thách tương tác đầu tiên tại một điểm đến.',
    condition: 'Hoàn thành thử thách đầu tiên sau khi quét mã QR.',
  },
]

/** Illustrative visited-destination entries for the passport preview. */
export const SAMPLE_VISITED = [
  { name: 'Đồng sen Tháp Mười', area: 'Tháp Mười', date: '12/03', badge: 'Dấu ấn Hoa Sen' },
  { name: 'Vườn quốc gia Tràm Chim', area: 'Tam Nông', date: '12/03', badge: 'Nhà khám phá thiên nhiên' },
  { name: 'Làng hoa Sa Đéc', area: 'Sa Đéc', date: '13/03', badge: null },
]
