### 목차

- [HTML 기초](#html-기초)
- [글자 태그](#글자-태그)
- [목록 태그](#목록-태그)
- [이미지 및 멀티미디어 태그](#이미지-및-멀티미디어)
- [하이퍼링크 태그](#하이퍼링크-태그)
- [테이블 태그들](#테이블-태그들)
- [폼 태그](#폼-태그)
# HTML 기초

## 웹 브라우저 : 인터넷 화면을 보여주는 프로그램


- Chrome, Brave, Fire Fox, Safari, Opera, Edge ..
- 사용자가 사용하는 브라우저는 정해져 있지 않으며 브라우저마다 
  화면이 다르게 출력이 될 수 있으니 브라우저마다 테스트를 하면서 수정
  => 크로스 브라우징

  ## 웹 페이지 개발 방법
  
  - 구조(Structure) : HTML
  - 표현(Presentation) : CSS
  - 동작(Behavior) : JavaScript
  

  ## HTML(Hyper Text Markup Language) : 웹 페이지를 작성하는 언어
  
  - 웹 문서 / HTML 문서 / HTML 페이지

  ## 웹 페이지 생성
  - 저장 시 확장자는 .html 또는 .htm
  - 처음 보여지는 화면의 파일 이름은 "index.html" 

  ## main page, sub page 

  - main page : index.html
  - sub page : index.html 제외 파일명.html 파일들 

  ## HTML 내용 작성

  1. 이해하기 쉽게
  2. 논리적으로
  3. 의미있게
  4. 구조적으로
  5. 콘텐츠는 "제목 + 내용"으로 작성
  6. 디자인에는 없는 요소들도 내용 전달에 필요하면 추가 작성 
  7. 중요도, 선호도, 사용빈도가 높은 순으로

  ## 코딩 순서
  
  1. 내용 작성
  2. 마크업 : 용도나 목적에 맞는 태그 작성 
  3. 콘텐츠 블럭
  4. CSS 초기화
  5. CSS 작성
  6. 스크립트 적용
  7. 프로그래밍 적용
  8. 표준/접근성 검사
  9. 수정/보안

## 태그

``` 
<태그 속성="값"> </태그>
``` 
1. "<"와 ">" 사이에 명령어(tag, element) 작성
2. 시작태그와 종료태그로 구성
3. 종료태그가 없는 태그(br, img, hr, meta, input)
4. 태그는 중첩 가능하며 종료태그는 나중에 작성한 태그먼저 작성
5. 가급적 모든 태그와 속성은 소문자로 작성

## 속성의 특징

1. 태그와 속성, 속성과 속성은 공백으로 구분

```html
<a href="#"></a>
```

2. 여러 개의 속성을 사용할 수 있다. 

```html
<img src="/" width="100"> 
```

3. 하나의 속성에는 값을 한개만 지정가능하다.

```html
<img src="/" width="100,200"> <!-- 작성 불가 -->
```

4. 속성값은 원래의 이름이 한글인 경우가 아니면 사용이 불가능하다.

```html
<img src="/" width="삼백"><!-- 작성 불가 -->
<meta name="keywords" content="영화, 한국영화, 외국영화"> <!-- 예외적인 경우-->
```

## HTML 기본 문서 구조

```
<!DOCTYPE html> <!-- 문서 형식 -->
<html lang="ko"> <!-- 기본 언어 설정 -->
    <head>
        <title>문서 제목</title>
    </head>
    <body></body>
</html>
```
- !DOCTYPE html : 현재 문서가 HTML5 언어로 작성된 웹 문서
- html : 웹 문서의 시작과 끝
- head : 웹 문서의 정보
- body : 실제 웹 브라우저에 나타날 내용

## head에 많이 쓰는 태그
1. title : 문서의 제목
2. meta : 문서의 속성

## meta 태그

```html
<meta charset="UTF-8"> <!-- 문자 세트 지정 -->
<meta name="viewport" content="width-device-width, initial-scale=1.0"><!-- 모바일 기기-->
<meta http-equiv="X-UA-Compatible" content="ie=edge"> <!-- 인터넷 익스플로러 브라우저 --> 

<!-- 검색 엔진 -->
<meta name="keywords" content="키워드1, 키워드2">
<meta name="description" content="문서 설명">
<meta name="author" contet="문서 작성자">
```

- keywords를 사용함으로 옛날에는 검색되게끔 했지만 고환 키워드 추가로
현재는 검색 엔진에서 사용하지 않는다. (구글은 가능) 


## hn(Heading)

- 제목 표시
- h1(큰 제목) ~ h6(작은 제목)
- 줄 바꿈 + 볼드체 적용

## pre(Paragraph)

- 문단 구분


## br(Break)

- 줄 바꿈

## hr(Horizontal)

- 수평 줄

## pre(Preformat)

- 입력하는 대로 화면에 표시

# 글자 태그

[위로 이동](#목차)
## b(Bold), strong

- 글자를 강조
- 굵게 표시

## i(Itelic), em(Emphasized)

## u(Underline)

- 글자에 밑줄

## s(Strikethrough)

- 취소선

## mark

- 형광펜

## small

- 글자를 작게

## sup(Superscript Text), sub(Subscript Text)

- 위/아래 첨자

## q, blockquote

- 글을 인용할 경우

## abbr(Abbreviation)

- 약어 표시

<br>

# 목록 태그

[위로 이동](#목차)

## ul(Unordered List)

- 순서 없는 목록

## ol(Ordered List)

- 순서 있는 목록
- type : 항목 앞에 표시되는 숫자의 종류 변경
- start : 항목의 시작 번호 변경 (기본값 : 1)
- reversed : 항목을 역순으로 표시

## li(List Item)

- ul, ol의 항목

## dl(Description List)

- 정의 목록

## dt(Definition Term)

- 목록에 대한 정의

## dd(Definiton Description)

- 정의 목록의 항목

<br>

# 이미지 및 멀티미디어

[위로 이동](#목차)

## img

- 웹 페이지에 이미지 불러오기
- 고정길이 : px, 가변길이 : % => 기본값은 px 단위

```html
<img src="이미지 경로" alt="이미지 설명 문구" width="가로길이(px/%)" height="세로길이(px/%)">
```

## img 태그 속성의 alt

- 사진의 경로가 잘못되거나 이미지를 제대로 표현할 수 없는 경우 대체 텍스트의 용도
- 웹 접근성의 의해 정보를 청각, 촉각으로 얻는 사람들을 위해 img 속성의 alt로 정보를 전달한다.
- 전달할 정보가 없더라도 alt는 사용한다.(예시 alt="")


## audio

```html
<audio src="오디오 경로" controls autoplay loop ></audio>
```
- controls : 재생도구 출력 여부
- autoplay : 자동 재생여부 지정
- loop : 반복 재생여부 지정

## video

```html
<video src="비디오 경로" controls autoplay loop width="" heigth="" poster="썸네일 이미지 경로"> 
  ```

  - 기존 : object element, embeded element로 Flash, media player와 같은 플러그인을 사용
  - HTML5 : 플러그인 없이 동영상 재생
  - 재생, 일시중지 등 web browser 자체 control 제공

  ## iframe
```html
  <iframe width="너비" height="높이" src="페이지 경로"><iframe>
```

- 웹 문서 안에 다른 웹 페이지를 추가하는 태그(인라인 프레임)
- 유튜브 영상을 페이지에 넣고 싶을 때 사용

# 하이퍼링크 태그

[위로 이동](#목차)

## a(Anchor)

- 하이퍼링크 기능은 웹 문서의 가장 핵심적인 기능
- 클릭을 통해 연결된 곳으로 이동하여 사용을 편리하게 해주는 기능
- 텍스트를 클릭해 링크를 이동하는 방법, 이미지를 클릭해서 넘어가는 방법 등 존재
- 페이지 내에서의 링크를 통한 이동도 가능

## 절대경로

1. 최상위 디렉토리부터 순차적으로 이동하는 경로
2. 드라이브명(c:, d:)이나 프로토콜(http://, ftp://)으로 시작
3. 기존 파일의 위치에 상관없이 대상 파일의 경로가 동일

## 상대경로

1. 기존 파일과 대상 파일의 위치에 따라 경로 설정
2. 동일한 디렉터리에 있는 경우 : ./파일명.확장자 or 파일명.확장자
3. 하위 디렉터리에 있는 경우 : 디렉터리명/파일명.확장자
4. 상위 디렉터리에 있는 경우 : ../파일명.확장자

# 테이블 태그
[위로 이동](#목차)
## 테이블

- 웹 문서에서 자료를 정리할 때 사용
- 행과 열로 이루어져 있고, 행과 열이 만나는 지점을 셀

## 특징

1. 각 행의 셀 개수는 동일
2. 같은 행에 있는 셀들은 높이가 동일
3. 같은 열에 있는 셀들은 길이가 동일


## 관련 태그

1. table : 테이블의 외곽선 표시
2. tr(Table Row) : 테이블의 행(줄) 구분
3. td(Table Data Cell) : 셀(칸) 생성

## 셀 병합

1. colspan : 열 병합
2. rowspan : 행 병합

## 접근성 향상을 위한 요소

1. th(Table Header) : 제목 셀 지정
2. caption : 테이블의 제목
3. thead(제목) / tfoot(결과) / tbody(내용) : 각 셀들의 역할 별 구분

# 폼 태그

[위로 이동](#목차)

## 입력 양식(Web Form)

- 사용자가 페이지에 값을 전달하는 모든 형식

## form

1. 모든 양식은 `<form> ~ </form>` 안에서 작성
2. 모든 양식은 이름(name) 입력 : 서버로 전송된 값들은 구분하기 위한 키(key)값으로 사용
3. 대부분의 양식은 `<input>` 태그의 "type" 속성으로 정의
4. `<select>, <option>` : 콤보 상자 작성
5. `<textarea>` : 텍스트를 여러 줄 입력하는 상자 작성
6. `<button>` : 버튼 형식의 요소 작성(input 대신 button 사용)

- form 태그 속성
  - name : form 태그의 이름을 지정한다.0
  - method : 데이터 전송 방식을 지정한다.
  - action : 데이터를 전달할 서버(페이지)를 지정한다.

## GET, POST

- GET
  - 데이터를 불러올 떄 사용한다.
  - 데이터의 안정성이 낮다.
  - 데이터를 URL에 노출시켜서 서버에 전달한다.
  - 데이터 전달 속도가 빠르다.

- POST
  - 데이터를 보낼 때 사용한다.
  - 데이터의 안전성이 높다.
  - 데이터를 URL에 노출시키지 않고 서버에 전달한다.
  - GET보다 데이터 전달 속도가 느리다.

## input

  - 사용자로부터 데이터를 입력 받기 위한 태그
  - 속성 type의 값에 따라서 input이 변형된다.
  - 속성 값 종류

1. **text** : 한 줄의 텍스트를 입력받을 수 있다.

  - size : 입력 칸의 길이(보이는 글자 수)
  - maxlength : 최대 입력 가능한 글자 수
  - minlength : 최소 입력 글자 수
  - value : 입력 값

2. **password** : 비밀번호를 입력받을 수 있다.

3. **checkbox** : 여러 항목 중 여러 가지를 선택할 수 있다.

- value : check된 상태로 데이터 전송을 하면 value의 값이 전송된다.

  - checked : checkbox가 체크된 상태로 페이지가 열린다.

4. **radio** : 여러 항목 중 한 가지만 선택할 수 있다.

  - name : name이 같은 애들끼리 중에서 하나만 체크가 된다.

**file** : 파일을 첨부할 수 있다.

  - multiple 속성을 통해 파일을 다중으로 선택할 수 있다.
  - accept : 파일 선택할 때 보여지는 파일들의 종류를 지정한다.

6. **hidden** : 정보를 가지고 있어야 하지만 사용자에게 안보이게 할 때 사용한다.

7. **button** : 기본적으로 가진 기능이 없어 다른 기능과 연결해서 사용한다.

  - value : 버튼의 text를 바꿀 수 있다.

8. **submit** : 데이터를 전송할 떄 사용하는 버튼이다.

  - form 태그의 method 속성에 지정된 전송 방식으로 action 속성에 지정한 서버로 입력한 값들을 전송한다.

9. **reset** : form에서 입력한 값을 모두 초기화한다.

## 추가된 Type

1. 날짜 관련 Type

- **datetime** or **datetime-local** : 년/월/일/시/분/초에 대한 데이터를 입력받을 수 있다. 

  - **week** : 주에 대한 데이터를 입력받을 수 있다.
  - **month** : 년/월에 대한 데이터를 입력받을 수 있다.
  - **date** : 년/월/일에 대한 데이터를 입력받을 수 있다.
  - **time** : 시간(시/분/초)에 대한 데이터를 입력받을 수 있다.

2. **email** : 이메일 주소를 입력받을 수 있다.

  - 입력받은 값이 email 주소 형식이 맞는지 자동으로 체크해준다.

3. **url** : URL을 입력받을 수 있다.

4. **search** : 검색 값을 입력받을 수 있다.

  - text 타입과 다르게 검색어 입력 시 'X'가 표시되고 검색어를 쉽게 지울 수 있다.

5. **color** : 색상을 선택할 수 있다.

6. **number** : 숫자를 입력받을 수 있다.

  - min : 입력할 수 있는 최소값 (기본값 : 0)
  - max : 입력할 수 있는 최대값 (기본값 : 100)
  - step : 증감되는 숫자의 간격을 저장(기본값 : 1)
  - value : 표시할 초기값

7. **range** : 슬라이드바를 통해 숫자를 입력받을 수 있다.

8. **tel** : 전화번호를 입력받을 수 있다.
 
- 모바일 기기의 경우 가상 키보드 배열이 전화번호를 입력받을 수 있도록 바뀐다.

## input 기본 속성

1. placeholder : 텍스트 입력에 도움이 되는 힌트를 표시
2. autofocus : 요소에 마우스 커서를 표시
3. required : 필수로 입력해야 되는 태그에 사용
4. readonly : 읽기 전용으로 설정
5. disabled : 비활성화

## 표준 & 접근성 향상

1. fieldset : 양식의 소그룹
2. legend : fieldset의 제목
3. label : 필드와 텍스트의 그룹

## background-image

- 배경에 이미지를 설정하는 속성

```css
선택자 {
  background-image: url('이미지주소')
}
```

## background-repeat

- 배경 이미지 반복 여부를 지정하는 속성

```css
선택자 {
  background-repeat: repeat or repeat-x or repeat-y or no-repeat;
}
```

- repeat : 배경 이미지가 가득 찰 때까지 가로와 세로로 반복(기본값)
- repeat-x : 배경 이미지를 가로로 반복
- repeat-y : 배경 이미지를 세로로 반복
- no-repeat : 배경이미지를 한 번만 출력하고 반복하지 않는다.

## background-size

- 배경 이미지 크기를 조절하는 속성

```cs
선택자 {
  background-size: auto or contain or cover or 크기 or 백분율;
}
```

- auto :  원래 배경 이미지 크기만큼 표시 (기본값)
- contain : 요소 안에 배경 이미지가 들어가도록 확대/축소
- **cover** : 요소를 배경 이미지가 모두 덮을 때까지 확대
- 크기 : 너비와 높이 값을 지정
- 백분율 : 요소의 크기를 기준으로 너비와 높이의 백분율 값을 지정

## background-position

- 배경 이미지가 표시되는 위치를 조정하는 속성

```css
선택자 {
   background-position : 수평위치 수직위치;
}
```

- 수평 위치 : left, center, right, 크기값(px), 백분율로 표시
- 수직 위치 : top, center, bottom, 크기값(px), 백분율로 표시 

## background-origin
- 배경 이미지를 배치할 때 기준을 지정하는 속성

```css
선택자{
  background-origin: border-box or padding-box or content-box;
}
```

- border-box : 테두리(border)가 기준
- padding-box : 테두리를 뺀 패딩(padding)이 기준(기본값)
- content-box : 내용(content)이 기준

## background-attachment

- 웹 페이지가 위아래로 움직여도 배경 이미지는 움직이지 않고 고정하는 속성

```css
선택자 {
    background-attachment: scroll or fixed;
}
```

- scroll : 화면 스크롤과 함께 배경 이미지도 스크롤(기본값)
- **fixed** : 화면이 스크롤 되더라도 배경 이미지는 고정

## background

- 배경 스타일 속성을 한 번에 지정할 수 있는 속성

```css
선택자 {
    background: imag repeat attachment position clip origin size;
}
```


# 레이아웃 스타일

## 박스 모델(Box Model)
- 모든 요소들은 사각형 박스로 표현되는데 스타일 시트에서는 박스 형태인 요소를 박스 모델이라고 한다.
- CSS를 사용하면 박스 모델 요소의 크기, 위치, 속성을 변경할 수 있따.
- 박스 모델은 콘텐츠(Content) 영역과 테두리와 콘텐츠 영역 사이의 여백인 패딩(Padding), 박스 모델 사이의
여백인 마진(Margin)으로 구성된다.

## width, height

- 박스 모델에서 콘텐츠 영역의 크기를 지정할 때 사용
- width : 너비 지정
- height : 높이 지정

```css
선택자 {
    width: 크기 or 백분율 or auto;
    height: 크기 or 백분율 or auto;
}
```

- 크기(px)나 백분율(%)로 지정
- auto : 박스 모델의 너비와 높이 값이 콘텐츠에 따라 자동 결정 (기본값) 

## display

- 블록 레벨 요소를 인라인 레벨 요소로 변경하거나 인라인 레벨 요소를 블록 레벨 요소로 변경할 수 있는 속성

```css
선택자 {
   display: none or block or inline or inline-block or ...;
}
```

- none : 요소가 화면에서 표현되지 않고 공간도 차지하지 않는다.
- block : 요소를 블록 레벨 요소로 변경
- inline : 요소를 인라인 레벨 요소로 변경
- inline-block : 요소를 인라인 레벨로 배치하면서 내용에는 블록 레벨 속성을 지정
- inline 요소는 margin, padding, height, width가 제대로 설정되지 않는다.

## padding, margin

- padding은 테두리와 콘텐츠 영역 사이의 여백
- margin은 요소와 요소 사이의 여백

```css
선택자{
    padding[-위치] : 크기 or 백분율 or auto;
    margin[-위치] : 크기 or 백분율 or auto;
}
```

- 위치 : top, right, left, bottom으로 지정
- 크기(px)나 백분율(%)로 지정
- auto : 콘텐츠에 따라 자동으로 결정 (기본값)

## border-style

- 테두리 스타일을 지정하는 속성

```css
선택자 {
  broder-style: none or..... or solid;
}
```

- none : 테두리가 나타지 않는다. (기본값) 
- dashed : 테두리를 짧은 선으로 표시
- dotted : 테두리를 점선으로 표시
- double : 테두리를 이중선으로 표시
- **solid** 테두리를 실선으로 표시 

## border-width

- 테두리의 두께를 지정하는 속성

```css
선택자 {
    border[-위치]-width : 크기 or thick or medium or thin; 
}
```

## border-color

- 테두리의 색상을 지정하는 속성

```css
선택자 {
    border[-위치]-color: 색상;
}
```

## border

- 테두리의 두께, 스타일, 색상을 한 번에 지정하는 속성

```css
선택자 {
  border: 두께 스타일 색상;
}
```

## border-radius

- 테두리의 모서리를 둥글게 지정하는 속성
- 테두리 모서리의 두 방향과 반지름 값을 사용해서 표기

```css
선택자 {-위치-위치}-radius: 크기 or 백분율;
```

## 포지셔닝

- CSS를 이용해서 여러 요소를 원하는 위치에 적절하게 배치하는 것

## box-sizing

- 요소의 너비와 높이의 기준을 지정하는 속성

```css
선택자 {
  box-sizing: content-box or border-box;
  }
  ```
- content-box : 요소의 너비와 높이를 콘텐츠를 기준으로 지정(기본값)
- border-box : 요소의 너비와 높이를 테두리를 기준으로 지정

## float, clear

- float 속성은 요소의 위치를 왼쪽이나 오른쪽으로 배치하는 속성

```css
선택자{
  float : left or right or none;
}
```

- left : 요소를 왼쪽에 배치
- right : 요소를 오른쪽에 배치
- none : 요소를 어느 쪽으로도 배치하지 않는다.

* float 속성을 사용해 요소를 배치하면 다음 요소에 영향을 미치는데 이를 초기화시키는 속성이 clear 속성

## position

- 웹 문서 안에서 요소들을 자유롭게 배치하는 속성

```css
선택자{
  position: static or relative or absolute or fixed;
}
```

- static : 문서의 흐름에 맞추어 요소를 배치한다. (기본값)
- **relative**: 이전 요소에 연결해 배치하면서 위치를 지정하여 요소를 배치
- **absolute** : 원하는 위치를 지정하여 요소를 배치
- **fixed** : 지정한 위치에 고정하여 요소를 배치
- 속성값이 static을 제외한 나머지들은 좌표를 이용해서 요소의 위치를 조절할 수 있다.
- 위치는 top, bottom, left, right로 지정할 수 있다.


## visibility
- 요소를 화면에 보이거나 보이지 않게 하는 속성
```css
선택자{
  visibility: visible or hidden or collapse;
}
```

- visible : 요소를 표시 (기본값)
- hidden : 요소를 감춘다. 단, 크기는 유지하기 떄문에 공간은 차지한다.
- collapse : 표의 행, 열, 행 그룹 등에서 지정하면 서로 겹치도록 지정한다. 
             그 외의 영역에서 사용하면 hidden처럼 처리된다.


## z-index

- 요소 위에 요소를 쌓을 떄 쌓는 순서를 지정하는 속성
- 요소에 z-index 값이 클수록 위에 쌓인다.
- 무조건 맨 위에 표시해야 하는 경우 큰 값으로 지정하기도 한다.

```css
선택자 {
    z-index: 값;
}
```

 