'use client'

import AttributesPentagram from '@/../public/attributes.png'
import { attributesEnum } from '@/constants'
import Image from 'next/image'

export default function AttributesInfo(attributes: Object, handleAttributesChanges: Function) {
	return (
		<>
			<div className='flex flex-col items-center justify-center ml-2 rounded-xl py-4 bg-neutral-900'>
				<div className='relative border-red-900'>
					<Image alt='Character avatar' src={AttributesPentagram} width={360} height={360}/>
					<label className='text-center absolute top-8 left-[140px] w-20 h-20'>
						<input id="AGI" className='w-16 h-12 text-5xl' type='number' onChange={(e) => handleAttributesChanges({ ...attributes, [attributesEnum.AGI]: parseInt(e.target.value) })} />
					</label>
					<label className='text-center absolute top-[108px] left-7 w-20 h-20'>
						<input id="FOR" className='w-16 h-12 text-5xl' type='number' onChange={(e) => handleAttributesChanges({ ...attributes, [attributesEnum.FOR]: parseInt(e.target.value) })} />
					</label>
					<label className='text-center absolute top-[108px] right-7 w-20 h-20'>
						<input id="INT" className='w-16 h-12 text-5xl' type='number' onChange={(e) => handleAttributesChanges({ ...attributes, [attributesEnum.INT]: parseInt(e.target.value) })} />
					</label>
					<label className='text-center absolute bottom-[38px] left-[60px] w-20 h-20'>
						<input id="PRE" className='w-16 h-12 text-5xl' type='number' onChange={(e) => handleAttributesChanges({ ...attributes, [attributesEnum.PRE]: parseInt(e.target.value) })} />
					</label>
					<label className='text-center absolute bottom-[38px] right-[60px] w-20 h-20'>
						<input id="VIG" className='w-16 h-12 text-5xl' type='number' onChange={(e) => handleAttributesChanges({ ...attributes, [attributesEnum.VIG]: parseInt(e.target.value) })} />
					</label>
				</div>
			</div>
		</>
	)
}
