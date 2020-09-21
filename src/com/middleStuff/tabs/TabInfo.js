import React from 'react'

import {ReactComponent as Insta} from '../../icons/instaold.svg'

const TabInfo = (prop) => {
	//VARS
	let mainDisplay = 'none'
    if (prop.tab === '-1') mainDisplay = 'block'

	return (
		<div style = {{display: mainDisplay, height: '100%', width: '100%'}}>
			<div style = {{width: '95%', borderRadius: '30px', margin: 'auto',
			boxShadow: '4px 4px 10px rgba(0,0,0,.3), -4px -4px 10px rgba(255,255,255,1)'}}>
				<div style = {{width:'77%', margin: '0 auto', padding: '2vh 0'}}>
					<p style = {{margin: '0', fontSize: '3.6vh'}}>
						Информация:
					</p>
					<p style = {{margin: '0', fontSize: '2.7vh', fontWeight: "500"}}>
						Атоматическое обновление:
					</p>
					<div style = {{margin: '1vh 0'}}>
						<p style = {{margin: '0'}}>
							covid19.rosminzdrav.ru
						</p>
						<p style = {{margin: '0'}}>
							www.who.int
						</p>
					</div>
					<p style = {{margin: '0', fontSize: '2.7vh', fontWeight: "500"}}>
						Памятки:
					</p>
					<div style = {{margin: '1vh 0'}}>
						<p style = {{margin: '0'}}>
							стопкоронавирус.рф
						</p>
					</div>
					<div style = {{height: '7vh'}}/>
					<a
						href = 'https://www.instagram.com/stephan_is_coding/'
						target = '_blank'
						rel = "noopener noreferrer"
						style = {{textDecoration: 'none'}}
					>
						<div style = {{display: 'flex', padding: '1vh 20%', justifyContent: 'space-between', borderRadius: '20px', marginBottom: '3vh',
			boxShadow: '4px 4px 10px rgba(0,0,0,.3), -4px -4px 10px rgba(255,255,255,1)'}}>
							<Insta />
							<p style = {{color: '#000', margin: '0', fontSize: '2.6vh'}}>
								Instagram
							</p>
						</div>
					</a>
					<div style = {{margin: '2.5vh 2vw 2vh 0'}}>

						<p  style = {{margin: '0'}}>
							Приложение сделал ученик 11А класса Дмитрий Малежик.
						</p>

					</div>
				</div>
			</div>
		</div>
	)
}

export default TabInfo