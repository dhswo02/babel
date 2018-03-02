const config = {
	entry: [],
	output: [],
	module: [],
	plugins: []
};

module.exports = config;

// [entry, output] 이 option 만 있을 때는 bundling 작업만 진행한다. (이 두 option 은 반드시 필요한다.)

// entry : webpack 은 라이브러리 간의 의존성을 그래프로 표현한다. 이 그래프를 만들 때의 시작점을 entry 라는 옵션을 통해 설정할 수 있다. 즉, webpack 을 이용하여 bundle 하고 build 할 애플리케이션의 시작점을 설정하는 옵션이다.

