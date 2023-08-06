import { Center } from '@chakra-ui/react';

interface SvgIconProps {
  d: string;
  w: number;
  h: number;
}

export const SvgIcon = ({ d, w, h }: SvgIconProps) => {
  const view_box = '0 0 ' + w.toString() + ' ' + h.toString();
  return (
    <Center w="40px" h="40px" marginLeft={2} marginRight={2}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={w}
        height={h}
        viewBox={view_box}
        fill="none"
      >
        <path d={d} fill="#006DCE" />
      </svg>
    </Center>
  );
};
