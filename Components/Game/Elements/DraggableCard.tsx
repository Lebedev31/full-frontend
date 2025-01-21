
import style from '@/style/Game.module.scss';
import Image from 'next/image';
import { useDrag } from 'react-dnd';
import { useRef } from 'react';

type DragProps = {
    imgPath: string
}

function DraggableCard({imgPath}: DragProps) {
    const dragRef = useRef<HTMLDivElement>(null);
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const [{isDragging}, connectDragSource] = useDrag(() => ({
        type: 'card',
        item: {imgPath},
        collect: (monitor) => ({
            isDragging: monitor.isDragging(),
        }),
    }));
    connectDragSource(dragRef);
    return (
        <div className={style.player_item} ref={dragRef}>
            <Image src={imgPath} alt="img" width={75} height={130}/>
        </div>
    )
}

export default DraggableCard;