import React from 'react'
import Story from './Story'

function StoryReel() {
  return (
    <div className='story-reel'>
        <Story 
        image='https://media.gettyimages.com/photos/portrait-of-jack-russell-terrier-a-dog-playing-on-the-backyard-in-the-picture-id1149983488?s=170667a'
        title='Milagros Ribas'
        profileSrc='https://media-exp1.licdn.com/dms/image/C4D03AQHq_qW1JFLeDg/profile-displayphoto-shrink_200_200/0/1612823208191?e=1652918400&v=beta&t=mrVaazeWZ3qmb-1DSo7I-wsOOXrlDnedsEoQQfiMhpQ'
        />
        <Story
        image='https://as2.ftcdn.net/v2/jpg/01/75/39/05/1000_F_175390546_Fx9HwbkUewFqqmoIiRpNtwO5XHMBYAJe.jpg'
        title='Jane Doe'
        profileSrc='https://www.hola.com/imagenes/moda/actualidad/20210311185889/emily-ratajkowski-madre-primer-hijo/0-929-648/emily-bebe-getty-t.jpg?filter=w600'
        />
        <Story 
        image='https://www.fcbarcelonanoticias.com/uploads/s1/12/92/92/4/messi-ante-venezuela.jpeg'
        title='Juan Pérez'
        profileSrc='https://img.freepik.com/foto-gratis/apuesto-hombre-empresario-sonriendo-alegre_176420-17877.jpg?size=626&ext=jpg&ga=GA1.2.1709495010.1640995200'
        />
        <Story 
        image='https://www.cine.com/media/noticias/2021/11/202111283553048.jpg'
        title='Alberto Chiesa'
        profileSrc='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSn4K1W-TPHCV2Ytl9Gsek_R8zD7WqAv34TvWxQbPE1yT5Xcy_H57ZCoVo-LVZ8G3x_ZZ0&usqp=CAU'
        />
       
    </div>
  )
}

export default StoryReel