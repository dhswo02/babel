const config = {
	entry: [],
	output: [],
	module: [],
	plugins: []
};

module.exports = config;

/*
	npm install -g webpack webpack-dev-server
	npm install --save-dev webpack webpack-dev-server

	config 객체를 정의하고 module.exports 구문을 통해 노출시킨다.
	모든 config 파일은 entry, output, module, plugins 네가지 설정을 기본적인 옵션을 제공한다.
	entry, output 두 가지의 옵션만 있을 때는 bundling 작업만 진행한다. ( 이 두 옵션은 필수 옵션이다. )

	entry : webpack은 라이브러리 간의 의존성을 그래프로 표현한다. 이 그래프를 만들 때의 시작점을 entry 라는 옵션을 통해 설정할 수 있다. 즉, webpack을 이용하여 bundle하고 build할 애플리케이션의 시작점을 설정하는 옵션이다.
					- entry 값으로는 'string' 또는 '배열'
						```
							const config = {
								entry: './path/to/my/entry/file.js'
							}
						```
						배열을 사용하는 경우의 태표적인 경우로는 react-hot-loader 를 사용하는 경우가 있다.

					- entry point 를 여러개 설정해야 하는 경우에는 Object를 사용하여 지정할 수 있다.
						```
							const config = {
								entry: {
									app: './src/app.js',
									vendors: './src/vendors.js'
								}
							}
						```
						다른 entry point 에서 시작하므로 각각의 entry point 에서 생성된 그래프는 완전히 독립적인 그래프가 된다. ( 이때, 중복되는 코드들이 발생할 수 있는데 이 부분은 commons-chunk-plugin 을 통해서 해결할 수 있다. )

	output : entry로 지정된 파일로 부터 bundling을 진행하고, 그 결과를 어떻게 할지를 설정한다.
					 ```
					  const config = {
					    entry: [],
					    output: {
					      path: '/home/proj/dist',
					      filename: 'bundle.js'
					    }
					  }
					 ```
					 bundling된 결과 파일의 이름을 filename으로 어디에 생성할지에 대한 정보를 path에 설정해준다. path에는 절대 경로를 통해 설정해줘야 한다. 그렇기 때문에 __dirname을 사용할 수 있다.
					 ```
					  const config = {
					    entry: [],
					    output: {
					      path: __dirname + '/dist',
					      filename: 'bundle.js'
					    }
					  }
					 ```
					 path라는 모듈을 사용해서 path를 지정해줄 수 있다. .join(), .resolve() 두 가지의 메소드는 약간의 차이는 있지만 __dirname을 상요하는 경우 두 메소드 둘다 동일하게 의도하는 값을 반환하기 때문에 둘 다 사용 가능하다.

	module : module 옵션은 webpack을 통해 bundling을 진행할 때 처리해야 하는 task 들을 실행할 때 사용한다. ES5 문법을 사용하기 위해 먼저 babel을 통해 transpile을 해야 하는데 이 작업을 babel-loader를 통해 설정해줄 수 있다.

	module.rules : rules에 각종 loader들을 등록할 수 있다. 배열의 형태로 여러 loader들을 등록한다.
								 ```
								  const config = {
								    module: {
								      rules: [{
								        test: /\.js%/,
												exclude: /node_modules/,
												include: path.join(__dirname, 'src'),
												use: [{
													loader: babel-loader',
													options: {
														presets: [
															['env', {module: false}]
														]
													}
												}]
								      }]
								    }
								  }
								 ```
								 tip : babel-loader를 사용하기 위해서는 babel-core, babel-loader, babel-preset-env 세 개의 모듈이 필요하다. babel-preset-env의 env가 es2015, es2016, es2017, latest를 대체한다.
*/

