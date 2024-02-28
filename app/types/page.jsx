
import Image from 'next/image'

export default function Types() {

    const WIDTH_IMG = 'w-6'
    const HEIGHT_IMG = 'h-6'
    const WIDTH_IMG_MD = 'md:w-8'
    const HEIGHT_IMG_MD = 'md:h-8'
    
    return (
        <div className="flex flex-col w-screen h-full items-center mt-32 ">
            <div className='flex w-[20rem] h-[34rem] md:w-[30rem] md:h-[45rem]'>
                <div className=' w-[10%] flex flex-col border-r border-blue-800 pt-8 gap-1'>
                    <span className={`${WIDTH_IMG} ${HEIGHT_IMG} relative ${WIDTH_IMG_MD} ${HEIGHT_IMG_MD}`}>
                        <Image src='/img/grass.webp' fill priority sizes='auto' alt='grass' className=""/>
                    </span>
                    <span className={`${WIDTH_IMG} ${HEIGHT_IMG} relative ${WIDTH_IMG_MD} ${HEIGHT_IMG_MD}`}>
                        <Image src='/img/water.webp' fill priority sizes='auto' alt='water' className=""/>
                    </span>
                    <span className={`${WIDTH_IMG} ${HEIGHT_IMG} relative ${WIDTH_IMG_MD} ${HEIGHT_IMG_MD}`}>
                        <Image src='/img/fire.webp' fill priority sizes='auto' alt='fire' className=""/>
                    </span>
                    <span className={`${WIDTH_IMG} ${HEIGHT_IMG} relative ${WIDTH_IMG_MD} ${HEIGHT_IMG_MD}`}>
                        <Image src='/img/poison.webp' fill priority sizes='auto' alt='poison' className=""/>
                    </span>
                    <span className={`${WIDTH_IMG} ${HEIGHT_IMG} relative ${WIDTH_IMG_MD} ${HEIGHT_IMG_MD}`}>
                        <Image src='/img/flying.webp' fill priority sizes='auto' alt='flying' className=""/>
                    </span>
                    <span className={`${WIDTH_IMG} ${HEIGHT_IMG} relative ${WIDTH_IMG_MD} ${HEIGHT_IMG_MD}`}>
                        <Image src='/img/bug.webp' fill priority sizes='auto' alt='bug' className=""/>
                    </span>
                    <span className={`${WIDTH_IMG} ${HEIGHT_IMG} relative ${WIDTH_IMG_MD} ${HEIGHT_IMG_MD}`}>
                        <Image src='/img/normal.webp' fill priority sizes='auto' alt='normal' className=""/>
                    </span>
                    <span className={`${WIDTH_IMG} ${HEIGHT_IMG} relative ${WIDTH_IMG_MD} ${HEIGHT_IMG_MD}`}>
                        <Image src='/img/electric.webp' fill priority sizes='auto' alt='electric' className=""/>
                    </span>
                    <span className={`${WIDTH_IMG} ${HEIGHT_IMG} relative ${WIDTH_IMG_MD} ${HEIGHT_IMG_MD}`}>
                        <Image src='/img/ground.webp' fill priority sizes='auto' alt='ground' className=""/>
                    </span>
                    <span className={`${WIDTH_IMG} ${HEIGHT_IMG} relative ${WIDTH_IMG_MD} ${HEIGHT_IMG_MD}`}>
                        <Image src='/img/fighting.webp' fill priority sizes='auto' alt='fighting' className=""/>
                    </span>
                    <span className={`${WIDTH_IMG} ${HEIGHT_IMG} relative ${WIDTH_IMG_MD} ${HEIGHT_IMG_MD}`}>
                        <Image src='/img/fairy.webp' fill priority sizes='auto' alt='fairy' className=""/>
                    </span>
                    <span className={`${WIDTH_IMG} ${HEIGHT_IMG} relative ${WIDTH_IMG_MD} ${HEIGHT_IMG_MD}`}>
                        <Image src='/img/psychic.webp' fill priority sizes='auto' alt='psychic' className=""/>
                    </span>
                    <span className={`${WIDTH_IMG} ${HEIGHT_IMG} relative ${WIDTH_IMG_MD} ${HEIGHT_IMG_MD}`}>
                        <Image src='/img/steel.webp' fill priority sizes='auto' alt='steel' className=""/>
                    </span>
                    <span className={`${WIDTH_IMG} ${HEIGHT_IMG} relative ${WIDTH_IMG_MD} ${HEIGHT_IMG_MD}`}>
                        <Image src='/img/ice.webp' fill priority sizes='auto' alt='ice' className=""/>
                    </span>
                    <span className={`${WIDTH_IMG} ${HEIGHT_IMG} relative ${WIDTH_IMG_MD} ${HEIGHT_IMG_MD}`}>
                        <Image src='/img/rock.webp' fill priority sizes='auto' alt='rock' className=""/>
                    </span>
                    <span className={`${WIDTH_IMG} ${HEIGHT_IMG} relative ${WIDTH_IMG_MD} ${HEIGHT_IMG_MD}`}>
                        <Image src='/img/dragon.webp' fill priority sizes='auto' alt='dragon' className=""/>
                    </span>
                    <span className={`${WIDTH_IMG} ${HEIGHT_IMG} relative ${WIDTH_IMG_MD} ${HEIGHT_IMG_MD}`}>
                        <Image src='/img/dark.webp' fill priority sizes='auto' alt='dark' className=""/>
                    </span>
                    <span className={`${WIDTH_IMG} ${HEIGHT_IMG} relative ${WIDTH_IMG_MD} ${HEIGHT_IMG_MD}`}>
                        <Image src='/img/ghost.webp' fill priority sizes='auto' alt='ghost' className=""/>
                    </span>
                </div>
                <div className='border-r w-[46%] flex flex-col items-center gap-y-1 border-blue-800'>
                    <span className='underline decoration-blue-800 underline-offset-4 mb-1 text-yellow-600/90'>Strong Against</span>
                    <span className='flex gap-1'>
                        <span className={`${WIDTH_IMG} ${HEIGHT_IMG} relative ${WIDTH_IMG_MD} ${HEIGHT_IMG_MD}`}>
                            <Image src='/img/water.webp' fill priority sizes='auto' alt='water' className=""/>
                        </span>
                        <span className={`${WIDTH_IMG} ${HEIGHT_IMG} relative ${WIDTH_IMG_MD} ${HEIGHT_IMG_MD}`}>
                            <Image src='/img/rock.webp' fill priority sizes='auto' alt='rock' className=""/>
                        </span>
                        <span className={`${WIDTH_IMG} ${HEIGHT_IMG} relative ${WIDTH_IMG_MD} ${HEIGHT_IMG_MD}`}>
                            <Image src='/img/ground.webp' fill priority sizes='auto' alt='ground' className=""/>
                        </span>
                    </span>
                    <span className='flex gap-1'>
                        <span className={`${WIDTH_IMG} ${HEIGHT_IMG} relative ${WIDTH_IMG_MD} ${HEIGHT_IMG_MD}`}>
                            <Image src='/img/fire.webp' fill priority sizes='auto' alt='fire' className=""/>
                        </span>
                        <span className={`${WIDTH_IMG} ${HEIGHT_IMG} relative ${WIDTH_IMG_MD} ${HEIGHT_IMG_MD}`}>
                            <Image src='/img/rock.webp' fill priority sizes='auto' alt='rock' className=""/>
                        </span>
                        <span className={`${WIDTH_IMG} ${HEIGHT_IMG} relative ${WIDTH_IMG_MD} ${HEIGHT_IMG_MD}`}>
                            <Image src='/img/ground.webp' fill priority sizes='auto' alt='ground' className=""/>
                        </span>
                    </span>
                    <span className='flex gap-1'>
                        <span className={`${WIDTH_IMG} ${HEIGHT_IMG} relative ${WIDTH_IMG_MD} ${HEIGHT_IMG_MD}`}>
                            <Image src='/img/grass.webp' fill priority sizes='auto' alt='grass' className=""/>
                        </span>
                        <span className={`${WIDTH_IMG} ${HEIGHT_IMG} relative ${WIDTH_IMG_MD} ${HEIGHT_IMG_MD}`}>
                            <Image src='/img/steel.webp' fill priority sizes='auto' alt='steel' className=""/>
                        </span>
                        <span className={`${WIDTH_IMG} ${HEIGHT_IMG} relative ${WIDTH_IMG_MD} ${HEIGHT_IMG_MD}`}>
                            <Image src='/img/bug.webp' fill priority sizes='auto' alt='bug' className=""/>
                        </span><span className={`${WIDTH_IMG} ${HEIGHT_IMG} relative ${WIDTH_IMG_MD} ${HEIGHT_IMG_MD}`}>
                            <Image src='/img/ice.webp' fill priority sizes='auto' alt='ice' className=""/>
                        </span>
                    </span>
                    <span className='flex gap-1'>
                        <span className={`${WIDTH_IMG} ${HEIGHT_IMG} relative ${WIDTH_IMG_MD} ${HEIGHT_IMG_MD}`}>
                            <Image src='/img/grass.webp' fill priority sizes='auto' alt='grass' className=""/>
                        </span>
                        <span className={`${WIDTH_IMG} ${HEIGHT_IMG} relative ${WIDTH_IMG_MD} ${HEIGHT_IMG_MD}`}>
                            <Image src='/img/fairy.webp' fill priority sizes='auto' alt='fairy' className=""/>
                        </span>
                    </span>
                    <span className='flex gap-1'>
                        <span className={`${WIDTH_IMG} ${HEIGHT_IMG} relative ${WIDTH_IMG_MD} ${HEIGHT_IMG_MD}`}>
                            <Image src='/img/grass.webp' fill priority sizes='auto' alt='grass' className=""/>
                        </span>
                        <span className={`${WIDTH_IMG} ${HEIGHT_IMG} relative ${WIDTH_IMG_MD} ${HEIGHT_IMG_MD}`}>
                            <Image src='/img/bug.webp' fill priority sizes='auto' alt='bug' className=""/>
                        </span>
                        <span className={`${WIDTH_IMG} ${HEIGHT_IMG} relative ${WIDTH_IMG_MD} ${HEIGHT_IMG_MD}`}>
                            <Image src='/img/fighting.webp' fill priority sizes='auto' alt='fighting' className=""/>
                        </span>
                    </span>
                    <span className='flex gap-1'>
                        <span className={`${WIDTH_IMG} ${HEIGHT_IMG} relative ${WIDTH_IMG_MD} ${HEIGHT_IMG_MD}`}>
                            <Image src='/img/grass.webp' fill priority sizes='auto' alt='grass' className=""/>
                        </span>
                        <span className={`${WIDTH_IMG} ${HEIGHT_IMG} relative ${WIDTH_IMG_MD} ${HEIGHT_IMG_MD}`}>
                            <Image src='/img/psychic.webp' fill priority sizes='auto' alt='psychic' className=""/>
                        </span>
                        <span className={`${WIDTH_IMG} ${HEIGHT_IMG} relative ${WIDTH_IMG_MD} ${HEIGHT_IMG_MD}`}>
                            <Image src='/img/dark.webp' fill priority sizes='auto' alt='dark' className=""/>
                        </span>
                    </span>
                    <span className='flex gap-1 md:py-1'>
                        None
                    </span>
                    <span className='flex gap-1'>
                        <span className={`${WIDTH_IMG} ${HEIGHT_IMG} relative ${WIDTH_IMG_MD} ${HEIGHT_IMG_MD}`}>
                            <Image src='/img/water.webp' fill priority sizes='auto' alt='water' className=""/>
                        </span>
                        <span className={`${WIDTH_IMG} ${HEIGHT_IMG} relative ${WIDTH_IMG_MD} ${HEIGHT_IMG_MD}`}>
                            <Image src='/img/flying.webp' fill priority sizes='auto' alt='flying' className=""/>
                        </span>
                    </span>
                    <span className='flex gap-1 '>
                        <span className={`${WIDTH_IMG} ${HEIGHT_IMG} relative ${WIDTH_IMG_MD} ${HEIGHT_IMG_MD}`}>
                            <Image src='/img/fire.webp' fill priority sizes='auto' alt='fire' className=""/>
                        </span>
                        <span className={`${WIDTH_IMG} ${HEIGHT_IMG} relative ${WIDTH_IMG_MD} ${HEIGHT_IMG_MD}`}>
                            <Image src='/img/electric.webp' fill priority sizes='auto' alt='electric' className=""/>
                        </span>
                        <span className={`${WIDTH_IMG} ${HEIGHT_IMG} relative ${WIDTH_IMG_MD} ${HEIGHT_IMG_MD}`}>
                            <Image src='/img/steel.webp' fill priority sizes='auto' alt='steel' className=""/>
                        </span>
                        <span className={`${WIDTH_IMG} ${HEIGHT_IMG} relative ${WIDTH_IMG_MD} ${HEIGHT_IMG_MD}`}>
                            <Image src='/img/rock.webp' fill priority sizes='auto' alt='rock' className=""/>
                        </span>
                        <span className={`${WIDTH_IMG} ${HEIGHT_IMG} relative ${WIDTH_IMG_MD} ${HEIGHT_IMG_MD}`}>
                            <Image src='/img/poison.webp' fill priority sizes='auto' alt='poison' className=""/>
                        </span>
                    </span>
                    <span className='flex gap-1 '>
                        <span className={`${WIDTH_IMG} ${HEIGHT_IMG} relative ${WIDTH_IMG_MD} ${HEIGHT_IMG_MD}`}>
                            <Image src='/img/normal.webp' fill priority sizes='auto' alt='normal' className=""/>
                        </span>
                    </span>
                    <span className='flex gap-1 '>
                        <span className={`${WIDTH_IMG} ${HEIGHT_IMG} relative ${WIDTH_IMG_MD} ${HEIGHT_IMG_MD}`}>
                            <Image src='/img/dragon.webp' fill priority sizes='auto' alt='dragon' className=""/>
                        </span>
                        <span className={`${WIDTH_IMG} ${HEIGHT_IMG} relative ${WIDTH_IMG_MD} ${HEIGHT_IMG_MD}`}>
                            <Image src='/img/fighting.webp' fill priority sizes='auto' alt='fighting' className=""/>
                        </span>
                        <span className={`${WIDTH_IMG} ${HEIGHT_IMG} relative ${WIDTH_IMG_MD} ${HEIGHT_IMG_MD}`}>
                            <Image src='/img/dark.webp' fill priority sizes='auto' alt='dark' className=""/>
                        </span>
                    </span>
                    <span className='flex gap-1 '>
                        <span className={`${WIDTH_IMG} ${HEIGHT_IMG} relative ${WIDTH_IMG_MD} ${HEIGHT_IMG_MD}`}>
                            <Image src='/img/fighting.webp' fill priority sizes='auto' alt='fighting' className=""/>
                        </span>
                        <span className={`${WIDTH_IMG} ${HEIGHT_IMG} relative ${WIDTH_IMG_MD} ${HEIGHT_IMG_MD}`}>
                            <Image src='/img/poison.webp' fill priority sizes='auto' alt='poison' className=""/>
                        </span>
                    </span>
                    <span className='flex gap-1 '>
                        <span className={`${WIDTH_IMG} ${HEIGHT_IMG} relative ${WIDTH_IMG_MD} ${HEIGHT_IMG_MD}`}>
                            <Image src='/img/fairy.webp' fill priority sizes='auto' alt='fairy' className=""/>
                        </span>
                        <span className={`${WIDTH_IMG} ${HEIGHT_IMG} relative ${WIDTH_IMG_MD} ${HEIGHT_IMG_MD}`}>
                            <Image src='/img/rock.webp' fill priority sizes='auto' alt='rock' className=""/>
                        </span>
                        <span className={`${WIDTH_IMG} ${HEIGHT_IMG} relative ${WIDTH_IMG_MD} ${HEIGHT_IMG_MD}`}>
                            <Image src='/img/ice.webp' fill priority sizes='auto' alt='ice' className=""/>
                        </span>
                    </span>
                    <span className='flex gap-1 '>
                        <span className={`${WIDTH_IMG} ${HEIGHT_IMG} relative ${WIDTH_IMG_MD} ${HEIGHT_IMG_MD}`}>
                            <Image src='/img/grass.webp' fill priority sizes='auto' alt='grass' className=""/>
                        </span>
                        <span className={`${WIDTH_IMG} ${HEIGHT_IMG} relative ${WIDTH_IMG_MD} ${HEIGHT_IMG_MD}`}>
                            <Image src='/img/ground.webp' fill priority sizes='auto' alt='ground' className=""/>
                        </span>
                        <span className={`${WIDTH_IMG} ${HEIGHT_IMG} relative ${WIDTH_IMG_MD} ${HEIGHT_IMG_MD}`}>
                            <Image src='/img/dragon.webp' fill priority sizes='auto' alt='dragon' className=""/>
                        </span>
                        <span className={`${WIDTH_IMG} ${HEIGHT_IMG} relative ${WIDTH_IMG_MD} ${HEIGHT_IMG_MD}`}>
                            <Image src='/img/flying.webp' fill priority sizes='auto' alt='flying' className=""/>
                        </span>
                    </span>
                    <span className='flex gap-1 '>
                        <span className={`${WIDTH_IMG} ${HEIGHT_IMG} relative ${WIDTH_IMG_MD} ${HEIGHT_IMG_MD}`}>
                            <Image src='/img/fire.webp' fill priority sizes='auto' alt='fire' className=""/>
                        </span>
                        <span className={`${WIDTH_IMG} ${HEIGHT_IMG} relative ${WIDTH_IMG_MD} ${HEIGHT_IMG_MD}`}>
                            <Image src='/img/bug.webp' fill priority sizes='auto' alt='bug' className=""/>
                        </span>
                        <span className={`${WIDTH_IMG} ${HEIGHT_IMG} relative ${WIDTH_IMG_MD} ${HEIGHT_IMG_MD}`}>
                            <Image src='/img/flying.webp' fill priority sizes='auto' alt='flying' className=""/>
                        </span>
                        <span className={`${WIDTH_IMG} ${HEIGHT_IMG} relative ${WIDTH_IMG_MD} ${HEIGHT_IMG_MD}`}>
                            <Image src='/img/ice.webp' fill priority sizes='auto' alt='ice' className=""/>
                        </span>
                    </span>
                    <span className='flex gap-1 '>
                        <span className={`${WIDTH_IMG} ${HEIGHT_IMG} relative ${WIDTH_IMG_MD} ${HEIGHT_IMG_MD}`}>
                            <Image src='/img/dragon.webp' fill priority sizes='auto' alt='dragon' className=""/>
                        </span>
                    </span>
                    <span className='flex gap-1 '>
                        <span className={`${WIDTH_IMG} ${HEIGHT_IMG} relative ${WIDTH_IMG_MD} ${HEIGHT_IMG_MD}`}>
                            <Image src='/img/ghost.webp' fill priority sizes='auto' alt='ghost' className=""/>
                        </span>
                        <span className={`${WIDTH_IMG} ${HEIGHT_IMG} relative ${WIDTH_IMG_MD} ${HEIGHT_IMG_MD}`}>
                            <Image src='/img/psychic.webp' fill priority sizes='auto' alt='psychic' className=""/>
                        </span>
                    </span>
                    <span className='flex gap-1 '>
                        <span className={`${WIDTH_IMG} ${HEIGHT_IMG} relative ${WIDTH_IMG_MD} ${HEIGHT_IMG_MD}`}>
                            <Image src='/img/ghost.webp' fill priority sizes='auto' alt='ghost' className=""/>
                        </span>
                        <span className={`${WIDTH_IMG} ${HEIGHT_IMG} relative ${WIDTH_IMG_MD} ${HEIGHT_IMG_MD}`}>
                            <Image src='/img/psychic.webp' fill priority sizes='auto' alt='psychic' className=""/>
                        </span>
                    </span>
                </div>
                <div className='flex flex-col items-center w-[46%] gap-y-1'>
                    <span className='underline decoration-blue-800 underline-offset-4 mb-1 text-yellow-600/90 '>Weak Against</span>
                    <span className='flex gap-1'>
                        <span className={`${WIDTH_IMG} ${HEIGHT_IMG} relative ${WIDTH_IMG_MD} ${HEIGHT_IMG_MD}`}>
                            <Image src='/img/fire.webp' fill priority sizes='auto' alt='fire' className=""/>
                        </span>
                        <span className={`${WIDTH_IMG} ${HEIGHT_IMG} relative ${WIDTH_IMG_MD} ${HEIGHT_IMG_MD}`}>
                            <Image src='/img/bug.webp' fill priority sizes='auto' alt='bug' className=""/>
                        </span>
                        <span className={`${WIDTH_IMG} ${HEIGHT_IMG} relative ${WIDTH_IMG_MD} ${HEIGHT_IMG_MD}`}>
                            <Image src='/img/poison.webp' fill priority sizes='auto' alt='poison' className=""/>
                        </span>
                        <span className={`${WIDTH_IMG} ${HEIGHT_IMG} relative ${WIDTH_IMG_MD} ${HEIGHT_IMG_MD}`}>
                            <Image src='/img/flying.webp' fill priority sizes='auto' alt='flying' className=""/>
                        </span>
                        <span className={`${WIDTH_IMG} ${HEIGHT_IMG} relative ${WIDTH_IMG_MD} ${HEIGHT_IMG_MD}`}>
                            <Image src='/img/ice.webp' fill priority sizes='auto' alt='ice' className=""/>
                        </span>
                    </span>
                    <span className='flex gap-1'>
                        <span className={`${WIDTH_IMG} ${HEIGHT_IMG} relative ${WIDTH_IMG_MD} ${HEIGHT_IMG_MD}`}>
                            <Image src='/img/grass.webp' fill priority sizes='auto' alt='grass' className=""/>
                        </span>
                        <span className={`${WIDTH_IMG} ${HEIGHT_IMG} relative ${WIDTH_IMG_MD} ${HEIGHT_IMG_MD}`}>
                            <Image src='/img/electric.webp' fill priority sizes='auto' alt='electric' className=""/>
                        </span>
                    </span>
                    <span className='flex gap-1'>
                        <span className={`${WIDTH_IMG} ${HEIGHT_IMG} relative ${WIDTH_IMG_MD} ${HEIGHT_IMG_MD}`}>
                            <Image src='/img/water.webp' fill priority sizes='auto' alt='water' className=""/>
                        </span>
                        <span className={`${WIDTH_IMG} ${HEIGHT_IMG} relative ${WIDTH_IMG_MD} ${HEIGHT_IMG_MD}`}>
                            <Image src='/img/rock.webp' fill priority sizes='auto' alt='rock' className=""/>
                        </span>
                        <span className={`${WIDTH_IMG} ${HEIGHT_IMG} relative ${WIDTH_IMG_MD} ${HEIGHT_IMG_MD}`}>
                            <Image src='/img/ground.webp' fill priority sizes='auto' alt='ground' className=""/>
                        </span>
                    </span>
                    <span className='flex gap-1'>
                        <span className={`${WIDTH_IMG} ${HEIGHT_IMG} relative ${WIDTH_IMG_MD} ${HEIGHT_IMG_MD}`}>
                            <Image src='/img/ground.webp' fill priority sizes='auto' alt='ground' className=""/>
                        </span>
                        <span className={`${WIDTH_IMG} ${HEIGHT_IMG} relative ${WIDTH_IMG_MD} ${HEIGHT_IMG_MD}`}>
                            <Image src='/img/psychic.webp' fill priority sizes='auto' alt='psychic' className=""/>
                        </span>
                    </span>
                    <span className='flex gap-1'>
                        <span className={`${WIDTH_IMG} ${HEIGHT_IMG} relative ${WIDTH_IMG_MD} ${HEIGHT_IMG_MD}`}>
                            <Image src='/img/electric.webp' fill priority sizes='auto' alt='electric' className=""/>
                        </span>
                        <span className={`${WIDTH_IMG} ${HEIGHT_IMG} relative ${WIDTH_IMG_MD} ${HEIGHT_IMG_MD}`}>
                            <Image src='/img/rock.webp' fill priority sizes='auto' alt='rock' className=""/>
                        </span>
                        <span className={`${WIDTH_IMG} ${HEIGHT_IMG} relative ${WIDTH_IMG_MD} ${HEIGHT_IMG_MD}`}>
                            <Image src='/img/ice.webp' fill priority sizes='auto' alt='ice' className=""/>
                        </span>
                    </span>
                    <span className='flex gap-1'>
                        <span className={`${WIDTH_IMG} ${HEIGHT_IMG} relative ${WIDTH_IMG_MD} ${HEIGHT_IMG_MD}`}>
                            <Image src='/img/fire.webp' fill priority sizes='auto' alt='fire' className=""/>
                        </span>
                        <span className={`${WIDTH_IMG} ${HEIGHT_IMG} relative ${WIDTH_IMG_MD} ${HEIGHT_IMG_MD}`}>
                            <Image src='/img/rock.webp' fill priority sizes='auto' alt='rock' className=""/>
                        </span>
                        <span className={`${WIDTH_IMG} ${HEIGHT_IMG} relative ${WIDTH_IMG_MD} ${HEIGHT_IMG_MD}`}>
                            <Image src='/img/flying.webp' fill priority sizes='auto' alt='flying' className=""/>
                        </span>
                    </span>
                    <span className='flex gap-1'>
                        <span className={`${WIDTH_IMG} ${HEIGHT_IMG} relative ${WIDTH_IMG_MD} ${HEIGHT_IMG_MD}`}>
                                <Image src='/img/fighting.webp' fill priority sizes='auto' alt='fighting' className=""/>
                            </span>
                        </span>
                    <span className='flex gap-1'>
                        <span className={`${WIDTH_IMG} ${HEIGHT_IMG} relative ${WIDTH_IMG_MD} ${HEIGHT_IMG_MD}`}>
                            <Image src='/img/ground.webp' fill priority sizes='auto' alt='ground' className=""/>
                        </span>
                    </span>
                    <span className='flex gap-1 '>
                        <span className={`${WIDTH_IMG} ${HEIGHT_IMG} relative ${WIDTH_IMG_MD} ${HEIGHT_IMG_MD}`}>
                            <Image src='/img/water.webp' fill priority sizes='auto' alt='water' className=""/>
                        </span>
                        <span className={`${WIDTH_IMG} ${HEIGHT_IMG} relative ${WIDTH_IMG_MD} ${HEIGHT_IMG_MD}`}>
                            <Image src='/img/grass.webp' fill priority sizes='auto' alt='grass' className=""/>
                        </span>
                        <span className={`${WIDTH_IMG} ${HEIGHT_IMG} relative ${WIDTH_IMG_MD} ${HEIGHT_IMG_MD}`}>
                            <Image src='/img/ice.webp' fill priority sizes='auto' alt='ice' className=""/>
                        </span>
                    </span>
                    <span className='flex gap-1 '>
                        <span className={`${WIDTH_IMG} ${HEIGHT_IMG} relative ${WIDTH_IMG_MD} ${HEIGHT_IMG_MD}`}>
                            <Image src='/img/fairy.webp' fill priority sizes='auto' alt='fairy' className=""/>
                        </span>
                        <span className={`${WIDTH_IMG} ${HEIGHT_IMG} relative ${WIDTH_IMG_MD} ${HEIGHT_IMG_MD}`}>
                            <Image src='/img/psychic.webp' fill priority sizes='auto' alt='psychic' className=""/>
                        </span>
                        <span className={`${WIDTH_IMG} ${HEIGHT_IMG} relative ${WIDTH_IMG_MD} ${HEIGHT_IMG_MD}`}>
                            <Image src='/img/flying.webp' fill priority sizes='auto' alt='flying' className=""/>
                        </span>
                    </span>
                    <span className='flex gap-1 '>
                        <span className={`${WIDTH_IMG} ${HEIGHT_IMG} relative ${WIDTH_IMG_MD} ${HEIGHT_IMG_MD}`}>
                            <Image src='/img/steel.webp' fill priority sizes='auto' alt='steel' className=""/>
                        </span>
                        <span className={`${WIDTH_IMG} ${HEIGHT_IMG} relative ${WIDTH_IMG_MD} ${HEIGHT_IMG_MD}`}>
                            <Image src='/img/dark.webp' fill priority sizes='auto' alt='dark' className=""/>
                        </span>
                    </span>
                    <span className='flex gap-1 '>
                        <span className={`${WIDTH_IMG} ${HEIGHT_IMG} relative ${WIDTH_IMG_MD} ${HEIGHT_IMG_MD}`}>
                            <Image src='/img/bug.webp' fill priority sizes='auto' alt='bug' className=""/>
                        </span>
                        <span className={`${WIDTH_IMG} ${HEIGHT_IMG} relative ${WIDTH_IMG_MD} ${HEIGHT_IMG_MD}`}>
                            <Image src='/img/ghost.webp' fill priority sizes='auto' alt='ghost' className=""/>
                        </span>
                        <span className={`${WIDTH_IMG} ${HEIGHT_IMG} relative ${WIDTH_IMG_MD} ${HEIGHT_IMG_MD}`}>
                            <Image src='/img/dark.webp' fill priority sizes='auto' alt='dark' className=""/>
                        </span>
                    </span>
                    <span className='flex gap-1 '>
                        <span className={`${WIDTH_IMG} ${HEIGHT_IMG} relative ${WIDTH_IMG_MD} ${HEIGHT_IMG_MD}`}>
                            <Image src='/img/fire.webp' fill priority sizes='auto' alt='fire' className=""/>
                        </span>
                        <span className={`${WIDTH_IMG} ${HEIGHT_IMG} relative ${WIDTH_IMG_MD} ${HEIGHT_IMG_MD}`}>
                            <Image src='/img/ground.webp' fill priority sizes='auto' alt='ground' className=""/>
                        </span>
                        <span className={`${WIDTH_IMG} ${HEIGHT_IMG} relative ${WIDTH_IMG_MD} ${HEIGHT_IMG_MD}`}>
                            <Image src='/img/fighting.webp' fill priority sizes='auto' alt='fighting' className=""/>
                        </span>
                    </span>
                    <span className='flex gap-1 '>
                        <span className={`${WIDTH_IMG} ${HEIGHT_IMG} relative ${WIDTH_IMG_MD} ${HEIGHT_IMG_MD}`}>
                            <Image src='/img/fire.webp' fill priority sizes='auto' alt='fire' className=""/>
                        </span>
                        <span className={`${WIDTH_IMG} ${HEIGHT_IMG} relative ${WIDTH_IMG_MD} ${HEIGHT_IMG_MD}`}>
                            <Image src='/img/steel.webp' fill priority sizes='auto' alt='steel' className=""/>
                        </span>
                        <span className={`${WIDTH_IMG} ${HEIGHT_IMG} relative ${WIDTH_IMG_MD} ${HEIGHT_IMG_MD}`}>
                            <Image src='/img/rock.webp' fill priority sizes='auto' alt='rock' className=""/>
                        </span>
                        <span className={`${WIDTH_IMG} ${HEIGHT_IMG} relative ${WIDTH_IMG_MD} ${HEIGHT_IMG_MD}`}>
                            <Image src='/img/fighting.webp' fill priority sizes='auto' alt='fighting' className=""/>
                        </span>
                    </span>
                    <span className='flex gap-1 '>
                        <span className={`${WIDTH_IMG} ${HEIGHT_IMG} relative ${WIDTH_IMG_MD} ${HEIGHT_IMG_MD}`}>
                            <Image src='/img/water.webp' fill priority sizes='auto' alt='water' className=""/>
                        </span>
                        <span className={`${WIDTH_IMG} ${HEIGHT_IMG} relative ${WIDTH_IMG_MD} ${HEIGHT_IMG_MD}`}>
                            <Image src='/img/grass.webp' fill priority sizes='auto' alt='grass' className=""/>
                        </span>
                        <span className={`${WIDTH_IMG} ${HEIGHT_IMG} relative ${WIDTH_IMG_MD} ${HEIGHT_IMG_MD}`}>
                            <Image src='/img/ground.webp' fill priority sizes='auto' alt='ground' className=""/>
                        </span>
                        <span className={`${WIDTH_IMG} ${HEIGHT_IMG} relative ${WIDTH_IMG_MD} ${HEIGHT_IMG_MD}`}>
                            <Image src='/img/steel.webp' fill priority sizes='auto' alt='steel' className=""/>
                        </span>
                        <span className={`${WIDTH_IMG} ${HEIGHT_IMG} relative ${WIDTH_IMG_MD} ${HEIGHT_IMG_MD}`}>
                            <Image src='/img/fighting.webp' fill priority sizes='auto' alt='fighting' className=""/>
                        </span>
                    </span>
                    <span className='flex gap-1 '>
                        <span className={`${WIDTH_IMG} ${HEIGHT_IMG} relative ${WIDTH_IMG_MD} ${HEIGHT_IMG_MD}`}>
                            <Image src='/img/dragon.webp' fill priority sizes='auto' alt='dragon' className=""/>
                        </span>
                        <span className={`${WIDTH_IMG} ${HEIGHT_IMG} relative ${WIDTH_IMG_MD} ${HEIGHT_IMG_MD}`}>
                            <Image src='/img/fairy.webp' fill priority sizes='auto' alt='fairy' className=""/>
                        </span>
                        <span className={`${WIDTH_IMG} ${HEIGHT_IMG} relative ${WIDTH_IMG_MD} ${HEIGHT_IMG_MD}`}>
                            <Image src='/img/ice.webp' fill priority sizes='auto' alt='ice' className=""/>
                        </span>
                    </span>
                    <span className='flex gap-1 '>
                        <span className={`${WIDTH_IMG} ${HEIGHT_IMG} relative ${WIDTH_IMG_MD} ${HEIGHT_IMG_MD}`}>
                            <Image src='/img/bug.webp' fill priority sizes='auto' alt='bug' className=""/>
                        </span>
                        <span className={`${WIDTH_IMG} ${HEIGHT_IMG} relative ${WIDTH_IMG_MD} ${HEIGHT_IMG_MD}`}>
                            <Image src='/img/fighting.webp' fill priority sizes='auto' alt='fighting' className=""/>
                        </span>
                        <span className={`${WIDTH_IMG} ${HEIGHT_IMG} relative ${WIDTH_IMG_MD} ${HEIGHT_IMG_MD}`}>
                            <Image src='/img/fairy.webp' fill priority sizes='auto' alt='fairy' className=""/>
                        </span>
                    </span>
                    <span className='flex gap-1 '>
                        <span className={`${WIDTH_IMG} ${HEIGHT_IMG} relative ${WIDTH_IMG_MD} ${HEIGHT_IMG_MD}`}>
                            <Image src='/img/ghost.webp' fill priority sizes='auto' alt='ghost' className=""/>
                        </span>
                        <span className={`${WIDTH_IMG} ${HEIGHT_IMG} relative ${WIDTH_IMG_MD} ${HEIGHT_IMG_MD}`}>
                            <Image src='/img/dark.webp' fill priority sizes='auto' alt='dark' className=""/>
                        </span>
                    </span>
                </div>
                
            </div>
        </div>
    )
}