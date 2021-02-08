import React from 'react';
import styled, { css } from 'styled-components';

export const AboutHeader = () => {
    return (
        <About>
            <Title>О нас</Title>
            <AfterTitle>
                Okko — один из самых больших легальных онлайн-кинотеатров в России, мы успешно
                работаем с 2011 года.
            </AfterTitle>
            <Text>
                В нашем каталоге представлено 60 000 фильмов, мультфильмов и сериалов. С момента
                запуска сервис посетили более 20 млн пользователей. Ежемесячная аудитория составляет
                2,8 млн человек.
            </Text>
            <Text>
                Okko доступен на большинстве телевизоров с функцией Smart TV (Samsung, Sony, LG,
                Philips, Panasonic и другие популярные модели), на игровых консолях (PlayStation 3 и
                PlayStation 4) и на мобильных устройствах (Android и iOS). Загружайте фильмы и
                сериалы на мобильные устройства и смотрите в любой точке мира даже без интернета.
            </Text>
        </About>
    );
};

const About = styled.div`
    padding: 30px 0px;
    width: 100%;
    max-width: 850px;
`;

const Title = styled.h2`
    font-size: 40px;
    line-height: 50px;
    font-family: Helvetica Neue;
    margin-bottom: 2px;
`;

const AfterTitle = styled.h3`
    font-size: 20px;
    line-height: 31px;
    font-family: Helvetica Neue;
    margin-bottom: 20px;
`;

const Text = styled.p`
    font-size: 20px;
    line-height: 31px;
    font-family: HelveticaNeueCyr;
    margin-bottom: 20px;
`;
