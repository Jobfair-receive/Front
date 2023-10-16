import { createGlobalStyle } from 'styled-components';

import PretendardSemiBold from './asset/font/Pretendard-SemiBold.woff';
import PretendardRegular from './asset/font/Pretendard-Regular.woff';
import PretendardMedium from './asset/font/Pretendard-Medium.woff';
import PretendardBlack from './asset/font/Pretendard-Black.woff';

export const GlobalStyle = createGlobalStyle`

    html, body {
        height: 100%;
        width: 100%;
        margin: 0;
        padding: 0;
    }

    #root {
        height: 100%;
        width: 100%;
        margin: 0;
        padding: 0;
    }

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
    @font-face {
        font-family: 'PretendardBlack';
        src: local('PretendardBlack');
        font-style: normal;
        src: url(${PretendardBlack}) format('woff');
    }


`