# ☁️ Weather Wear

## 목차

#### 1. [프로젝트 소개](#intro)

#### 2. [기술 스택 및 개발 환경](#tech)

#### 3. [주요 기능](#feature)

#### 4. [화면 구성](#screen)

#### 5. [폴더 구조](#directory)

<br>
<br>

## <span id="intro">1. 프로젝트 소개</span>

날씨에 맞춰 옷차림을 추천해주는 서비스입니다.

<br>

### 서비스 바로가기

#### [🔗 배포 링크](https://weather-wear-mu.vercel.app/)

<br>

### 개발 기간

#### 2025.04.07 - 2025.04.09

<br>
<br>

## <span id='tech'>2. 기술 스택 및 개발 환경</span>

|        구분         |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| :-----------------: | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
|   **Environment**   | <img alt='Visual Studio Code' src='https://img.shields.io/badge/Visual%20Studio%20Code-007ACC?style=for-the-badge&logo=Visual%20Studio%20Code&logoColor=white' /> <img alt='Git' src='https://img.shields.io/badge/Git-F05032?style=for-the-badge&logo=Git&logoColor=white' /> <img alt='GitHub' src='https://img.shields.io/badge/GitHub-181717?style=for-the-badge&logo=GitHub&logoColor=white' />                                                                                                                                                                                                                                             |
| **Package Manager** | <img alt='npm' src='https://img.shields.io/badge/npm-CB3837?style=for-the-badge&logo=npm&logoColor=white' />                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
|   **Development**   | <img alt='Next.js' src='https://img.shields.io/badge/next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white' /> <img alt='TypeScript' src='https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=TypeScript&logoColor=white' /> <img alt='Tailwind CSS' src='https://img.shields.io/badge/Tailwind_CSS-06B6D4?style=for-the-badge&logo=tailwind-css&logoColor=white' /> <img alt='Axios' src='https://img.shields.io/badge/Axios-5A29E4?style=for-the-badge&logo=Axios&logoColor=white' /> <img alt='Zustand' src='https://img.shields.io/badge/zustand-000000?style=for-the-badge&logo=zustand&logoColor=white' /> |
|     **Deploy**      | <img alt='Vercel' src='https://img.shields.io/badge/vercel-000000?style=for-the-badge&logo=vercel&logoColor=white' />                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |

<br>
<br>

## <span id='feature'>3. 주요 기능</span>

- 현재 날씨, 시간별 예보 데이터 조회
- 날씨, 옷차림 토글 버튼

<br>
<br>

## <span id='screen'>4. 화면 구성</span>

|                                           날씨                                           |                                           옷차림                                           |
| :--------------------------------------------------------------------------------------: | :----------------------------------------------------------------------------------------: |
| ![날씨](https://github.com/user-attachments/assets/3c67dc16-a80e-4105-9029-df4a8e3fea12) | ![옷차림](https://github.com/user-attachments/assets/faf4c9cc-f1e0-4304-8daf-75a7b2dc0284) |

<br>
<br>

## <span id='directory'>5. 폴더 구조</span>

```
📦weather-wear
┣ 📂public
┃ ┣ 📂fonts
┃ ┗ 📂images
┣ 📂src
┃ ┣ 📂app
┃ ┃ ┣ 📂api
┃ ┃ ┃ ┗ 📜weather.ts
┃ ┃ ┣ 📜favicon.ico
┃ ┃ ┣ 📜layout.tsx
┃ ┃ ┗ 📜page.tsx
┃ ┣ 📂components
┃ ┃ ┣ 📜CurrentWeather.tsx
┃ ┃ ┣ 📜Forecast.tsx
┃ ┃ ┗ 📜ToggleButton.tsx
┃ ┣ 📂lib
┃ ┃ ┣ 📜cloth.ts
┃ ┃ ┗ 📜utils.ts
┃ ┣ 📂stores
┃ ┃ ┗ 📜weatherViewStore.ts
┃ ┣ 📂styles
┃ ┃ ┗ 📜globals.css
┗ ┗ 📂types
    ┗ 📜weather.ts
```
