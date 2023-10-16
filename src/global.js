import { createGlobalStyle } from 'styled-components';

import PretendardSemiBold from './asset/font/Pretendard-SemiBold.woff';
import PretendardRegular from './asset/font/Pretendard-Regular.woff';
import PretendardMedium from './asset/font/Pretendard-Medium.woff';



export const GlobalStyle = createGlobalStyle`
    @font-face {
        font-family: 'PretendardSemiBold';
        src: local('PretendardSemiBold');
        font-style: normal;
        src: url(${PretendardSemiBold}) format('woff');
    }
    @font-face {
        font-family: 'PretendardRegular';
        src: local('PretendardRegular');
        font-style: normal;
        src: url(${PretendardRegular}) format('woff');
    }
    @font-face {
        font-family: 'PretendardMedium';
        src: local('PretendardMedium');
        font-style: normal;
        src: url(${PretendardMedium}) format('woff');
    }


`