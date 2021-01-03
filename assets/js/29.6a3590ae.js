(window.webpackJsonp=window.webpackJsonp||[]).push([[29],{419:function(a,t,s){"use strict";s.r(t);var n=s(13),v=Object(n.a)({},(function(){var a=this,t=a.$createElement,s=a._self._c||t;return s("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[s("h1",{attrs:{id:"java-面向对象"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#java-面向对象"}},[a._v("#")]),a._v(" Java 面向对象")]),a._v(" "),s("blockquote",[s("p",[a._v("在"),s("a",{attrs:{href:"https://github.com/dunwu/blog/blob/master/source/_posts/programming/java/javacore/%E6%B7%B1%E5%85%A5%E7%90%86%E8%A7%A3Java%E5%9F%BA%E6%9C%AC%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B.md",target:"_blank",rel:"noopener noreferrer"}},[a._v("深入理解 Java 基本数据类型"),s("OutboundLink")],1),a._v("中我们了解 Java 中支持的基本数据类型（值类型）。本文开始讲解 Java 中重要的引用类型——类。")]),a._v(" "),s("p",[s("strong",[a._v("📦 本文以及示例源码已归档在 "),s("a",{attrs:{href:"https://github.com/dunwu/javacore/",target:"_blank",rel:"noopener noreferrer"}},[a._v("javacore"),s("OutboundLink")],1)])])]),a._v(" "),s("ul",[s("li",[s("a",{attrs:{href:"#1-%E9%9D%A2%E5%90%91%E5%AF%B9%E8%B1%A1"}},[a._v("1. 面向对象")]),a._v(" "),s("ul",[s("li",[s("a",{attrs:{href:"#11-%E5%B0%81%E8%A3%85"}},[a._v("1.1. 封装")])]),a._v(" "),s("li",[s("a",{attrs:{href:"#12-%E7%BB%A7%E6%89%BF"}},[a._v("1.2. 继承")])]),a._v(" "),s("li",[s("a",{attrs:{href:"#13-%E5%A4%9A%E6%80%81"}},[a._v("1.3. 多态")])])])]),a._v(" "),s("li",[s("a",{attrs:{href:"#2-%E7%B1%BB"}},[a._v("2. 类")])]),a._v(" "),s("li",[s("a",{attrs:{href:"#3-%E6%96%B9%E6%B3%95"}},[a._v("3. 方法")]),a._v(" "),s("ul",[s("li",[s("a",{attrs:{href:"#31-%E6%96%B9%E6%B3%95%E5%AE%9A%E4%B9%89"}},[a._v("3.1. 方法定义")])]),a._v(" "),s("li",[s("a",{attrs:{href:"#32-%E6%96%B9%E6%B3%95%E8%B0%83%E7%94%A8"}},[a._v("3.2. 方法调用")])]),a._v(" "),s("li",[s("a",{attrs:{href:"#33-%E6%9E%84%E9%80%A0%E6%96%B9%E6%B3%95"}},[a._v("3.3. 构造方法")])])])]),a._v(" "),s("li",[s("a",{attrs:{href:"#4-%E5%8F%98%E9%87%8F"}},[a._v("4. 变量")]),a._v(" "),s("ul",[s("li",[s("a",{attrs:{href:"#41-%E5%8F%98%E9%87%8F%E4%BF%AE%E9%A5%B0%E7%AC%A6"}},[a._v("4.1. 变量修饰符")])]),a._v(" "),s("li",[s("a",{attrs:{href:"#42-%E5%88%9B%E5%BB%BA%E5%AF%B9%E8%B1%A1"}},[a._v("4.2. 创建对象")])]),a._v(" "),s("li",[s("a",{attrs:{href:"#43-%E8%AE%BF%E9%97%AE%E5%AE%9E%E4%BE%8B%E5%8F%98%E9%87%8F%E5%92%8C%E6%96%B9%E6%B3%95"}},[a._v("4.3. 访问实例变量和方法")])])])]),a._v(" "),s("li",[s("a",{attrs:{href:"#5-%E8%AE%BF%E9%97%AE%E6%9D%83%E9%99%90%E6%8E%A7%E5%88%B6"}},[a._v("5. 访问权限控制")]),a._v(" "),s("ul",[s("li",[s("a",{attrs:{href:"#51-%E4%BB%A3%E7%A0%81%E7%BB%84%E7%BB%87"}},[a._v("5.1. 代码组织")])]),a._v(" "),s("li",[s("a",{attrs:{href:"#52-%E8%AE%BF%E9%97%AE%E6%9D%83%E9%99%90%E4%BF%AE%E9%A5%B0%E5%85%B3%E9%94%AE%E5%AD%97"}},[a._v("5.2. 访问权限修饰关键字")])])])]),a._v(" "),s("li",[s("a",{attrs:{href:"#6-%E6%8E%A5%E5%8F%A3"}},[a._v("6. 接口")])]),a._v(" "),s("li",[s("a",{attrs:{href:"#7-%E6%8A%BD%E8%B1%A1%E7%B1%BB"}},[a._v("7. 抽象类")])]),a._v(" "),s("li",[s("a",{attrs:{href:"#8-%E5%8F%82%E8%80%83%E8%B5%84%E6%96%99"}},[a._v("8. 参考资料")])])]),a._v(" "),s("h2",{attrs:{id:"_1-面向对象"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-面向对象"}},[a._v("#")]),a._v(" 1. 面向对象")]),a._v(" "),s("p",[a._v("每种编程语言，都有自己的操纵内存中元素的方式。")]),a._v(" "),s("p",[a._v("Java 中提供了"),s("a",{attrs:{href:"https://github.com/dunwu/blog/blob/master/source/_posts/programming/java/javacore/%E6%B7%B1%E5%85%A5%E7%90%86%E8%A7%A3Java%E5%9F%BA%E6%9C%AC%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B.md",target:"_blank",rel:"noopener noreferrer"}},[a._v("基本数据类型"),s("OutboundLink")],1),a._v("，但这还不能满足编写程序时，需要抽象更加复杂数据类型的需要。因此，Java 中，允许开发者通过类（类的机制下面会讲到）创建自定义类型。")]),a._v(" "),s("p",[a._v("有了自定义类型，那么数据类型自然会千变万化，所以，必须要有一定的机制，使得它们仍然保持一些必要的、通用的特性。")]),a._v(" "),s("p",[a._v("Java 世界有一句名言：一切皆为对象。这句话，你可能第一天学 Java 时，就听过了。这不仅仅是一句口号，也体现在 Java 的设计上。")]),a._v(" "),s("ul",[s("li",[a._v("首先，所有 Java 类都继承自 "),s("code",[a._v("Object")]),a._v(" 类（从这个名字，就可见一斑）。")]),a._v(" "),s("li",[a._v("几乎所有 Java 对象初始化时，都要使用 "),s("code",[a._v("new")]),a._v(" 创建对象（"),s("a",{attrs:{href:"https://github.com/dunwu/blog/blob/master/source/_posts/programming/java/javacore/%E6%B7%B1%E5%85%A5%E7%90%86%E8%A7%A3Java%E5%9F%BA%E6%9C%AC%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B.md",target:"_blank",rel:"noopener noreferrer"}},[a._v("基本数据类型"),s("OutboundLink")],1),a._v("、String、枚举特殊处理），对象存储在堆中。")])]),a._v(" "),s("div",{staticClass:"language-java extra-class"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("// 下面两")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("String")]),a._v(" s "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"abc"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("String")]),a._v(" s "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("new")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("String")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"abc"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n")])])]),s("p",[a._v("其中，"),s("code",[a._v("String s")]),a._v(" 定义了一个名为 s 的引用，它指向一个 "),s("code",[a._v("String")]),a._v(" 类型的对象，而实际的对象是 "),s("code",[a._v("“abc”")]),a._v(" 字符串。这就像是，使用遥控器（引用）来操纵电视机（对象）。")]),a._v(" "),s("p",[a._v("与 C/C++ 这类语言不同，程序员只需要通过 "),s("code",[a._v("new")]),a._v(" 创建一个对象，但不必负责销毁或结束一个对象。负责运行 Java 程序的 Java 虚拟机有一个垃圾回收器，它会监视 "),s("code",[a._v("new")]),a._v(" 创建的对象，一旦发现对象不再被引用，则会释放对象的内存空间。")]),a._v(" "),s("h3",{attrs:{id:"_1-1-封装"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-1-封装"}},[a._v("#")]),a._v(" 1.1. 封装")]),a._v(" "),s("p",[s("strong",[a._v("封装（Encapsulation）是指一种将抽象性函式接口的实现细节部份包装、隐藏起来的方法。")])]),a._v(" "),s("p",[a._v("封装最主要的作用在于我们能修改自己的实现代码，而不用修改那些调用我们代码的程序片段。")]),a._v(" "),s("p",[a._v("适当的封装可以让程式码更容易理解与维护，也加强了程式码的安全性。")]),a._v(" "),s("p",[a._v("封装的优点：")]),a._v(" "),s("ul",[s("li",[a._v("良好的封装能够减少耦合。")]),a._v(" "),s("li",[a._v("类内部的结构可以自由修改。")]),a._v(" "),s("li",[a._v("可以对成员变量进行更精确的控制。")]),a._v(" "),s("li",[a._v("隐藏信息，实现细节。")])]),a._v(" "),s("p",[a._v("实现封装的步骤：")]),a._v(" "),s("ol",[s("li",[a._v("修改属性的可见性来限制对属性的访问（一般限制为 private）。")]),a._v(" "),s("li",[a._v("对每个值属性提供对外的公共方法访问，也就是创建一对赋取值方法，用于对私有属性的访问。")])]),a._v(" "),s("h3",{attrs:{id:"_1-2-继承"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-2-继承"}},[a._v("#")]),a._v(" 1.2. 继承")]),a._v(" "),s("p",[a._v("继承是 java 面向对象编程技术的一块基石，因为它允许创建分等级层次的类。")]),a._v(" "),s("p",[a._v("继承就是子类继承父类的特征和行为，使得子类对象（实例）具有父类的实例域和方法，或子类从父类继承方法，使得子类具有父类相同的行为。")]),a._v(" "),s("p",[a._v("现实中的例子：")]),a._v(" "),s("p",[a._v("狗和鸟都是动物。如果将狗、鸟作为类，它们可以继承动物类。")]),a._v(" "),s("p",[s("img",{attrs:{src:"http://dunwu.test.upcdn.net/snap/1552641712126.png",alt:"img"}})]),a._v(" "),s("p",[a._v("类的继承形式：")]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("class 父类 {}\n\nclass 子类 extends 父类 {}\n")])])]),s("h4",{attrs:{id:"继承类型"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#继承类型"}},[a._v("#")]),a._v(" 继承类型")]),a._v(" "),s("p",[s("img",{attrs:{src:"http://www.runoob.com/wp-content/uploads/2013/12/types_of_inheritance.png",alt:"img"}})]),a._v(" "),s("h4",{attrs:{id:"继承的特性"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#继承的特性"}},[a._v("#")]),a._v(" 继承的特性")]),a._v(" "),s("ul",[s("li",[a._v("子类拥有父类非 private 的属性、方法。")]),a._v(" "),s("li",[a._v("子类可以拥有自己的属性和方法，即子类可以对父类进行扩展。")]),a._v(" "),s("li",[a._v("子类可以用自己的方式实现父类的方法。")]),a._v(" "),s("li",[a._v("Java 的继承是单继承，但是可以多重继承，单继承就是一个子类只能继承一个父类，多重继承就是，例如 A 类继承 B 类，B 类继承 C 类，所以按照关系就是 C 类是 B 类的父类，B 类是 A 类的父类，这是 Java 继承区别于 C++ 继承的一个特性。")]),a._v(" "),s("li",[a._v("提高了类之间的耦合性（继承的缺点，耦合度高就会造成代码之间的联系越紧密，代码独立性越差）。")])]),a._v(" "),s("h4",{attrs:{id:"继承关键字"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#继承关键字"}},[a._v("#")]),a._v(" 继承关键字")]),a._v(" "),s("p",[a._v("继承可以使用 extends 和 implements 这两个关键字来实现继承，而且所有的类都是继承于 java.lang.Object，当一个类没有继承的两个关键字，则默认继承 object（这个类在 "),s("strong",[a._v("java.lang")]),a._v(" 包中，所以不需要 "),s("strong",[a._v("import")]),a._v("）祖先类。")]),a._v(" "),s("h3",{attrs:{id:"_1-3-多态"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-3-多态"}},[a._v("#")]),a._v(" 1.3. 多态")]),a._v(" "),s("p",[a._v("刚开始学习面向对象编程时，容易被各种术语弄得云里雾里。所以，很多人会死记硬背书中对于术语的定义。")]),a._v(" "),s("p",[a._v("但是，随着应用和理解的深入，应该会渐渐有更进一步的认识，将其融汇贯通的理解。")]),a._v(" "),s("p",[a._v("学习类之前，先让我们思考一个问题：Java 中为什么要引入类机制，设计的初衷是什么？")]),a._v(" "),s("p",[a._v("Java 中提供的基本数据类型，只能表示单一的数值，这用于数值计算，还 OK。但是，如果要抽象模拟现实中更复杂的事物，则无法做到。")]),a._v(" "),s("p",[a._v("试想，如果要让你抽象狗的数据模型，怎么做？狗有眼耳口鼻等器官，有腿，狗有大小，毛色，这些都是它的状态，狗会跑、会叫、会吃东西，这些是它的行为。")]),a._v(" "),s("p",[a._v("类的引入，就是为了抽象这种相对复杂的事物。")]),a._v(" "),s("p",[a._v("对象是用于计算机语言对问题域中事物的描述。"),s("strong",[a._v("对象通过方法和属性来分别描述事物所具有的行为和状态。")])]),a._v(" "),s("p",[s("strong",[a._v("类是用于描述同一类的对象的一个抽象的概念，类中定义了这一类对象所具有的行为和状态。")])]),a._v(" "),s("p",[a._v("类可以看成是创建 Java 对象的模板。")]),a._v(" "),s("p",[a._v("什么是方法？扩展阅读："),s("a",{attrs:{href:"https://www.zhihu.com/question/20275578/answer/26577791",target:"_blank",rel:"noopener noreferrer"}},[a._v("面向对象编程的弊端是什么？ - invalid s 的回答"),s("OutboundLink")],1)]),a._v(" "),s("h2",{attrs:{id:"_2-类"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-类"}},[a._v("#")]),a._v(" 2. 类")]),a._v(" "),s("p",[a._v("与大多数面向对象编程语言一样，Java 使用 "),s("code",[a._v("class")]),a._v(" （类）关键字来表示自定义类型。自定义类型是为了更容易抽象现实事物。")]),a._v(" "),s("p",[a._v("在一个类中，可以设置一静一动两种元素：属性（静）和方法（动）。")]),a._v(" "),s("ul",[s("li",[s("strong",[a._v("属性（有的人喜欢称为成员、字段）")]),a._v(" - 属性抽象的是事物的状态。类属性可以是任何类型的对象。")]),a._v(" "),s("li",[s("strong",[a._v("方法（有的人喜欢称为函数）")]),a._v(" - 方法抽象的是事物的行为。")])]),a._v(" "),s("p",[a._v("类的形式如下：")]),a._v(" "),s("p",[s("img",{attrs:{src:"http://dunwu.test.upcdn.net/snap/1552640231731.png",alt:"img"}})]),a._v(" "),s("h2",{attrs:{id:"_3-方法"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3-方法"}},[a._v("#")]),a._v(" 3. 方法")]),a._v(" "),s("h3",{attrs:{id:"_3-1-方法定义"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3-1-方法定义"}},[a._v("#")]),a._v(" 3.1. 方法定义")]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("修饰符 返回值类型 方法名(参数类型 参数名){\n    ...\n    方法体\n    ...\n    return 返回值;\n}\n")])])]),s("p",[a._v("方法包含一个方法头和一个方法体。下面是一个方法的所有部分：")]),a._v(" "),s("ul",[s("li",[a._v("**修饰符：**修饰符，这是可选的，告诉编译器如何调用该方法。定义了该方法的访问类型。")]),a._v(" "),s("li",[a._v("**返回值类型 ：**方法可能有返回值。如果没有返回值，这种情况下，返回值类型应设为 void。")]),a._v(" "),s("li",[a._v("**方法名：**是方法的实际名称。方法名和参数表共同构成方法签名。")]),a._v(" "),s("li",[a._v("**参数类型：**参数像是一个占位符。当方法被调用时，传递值给参数。这个值被称为实参或变量。参数列表是指方法的参数类型、顺序和参数的个数。参数是可选的，方法可以不包含任何参数。")]),a._v(" "),s("li",[a._v("**方法体：**方法体包含具体的语句，定义该方法的功能。")])]),a._v(" "),s("p",[a._v("示例：")]),a._v(" "),s("div",{staticClass:"language-java extra-class"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("public")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("static")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("int")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("add")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("int")]),a._v(" x"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("int")]),a._v(" y"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n   "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("return")]),a._v(" x "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("+")]),a._v(" y"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n")])])]),s("h3",{attrs:{id:"_3-2-方法调用"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3-2-方法调用"}},[a._v("#")]),a._v(" 3.2. 方法调用")]),a._v(" "),s("p",[a._v("Java 支持两种调用方法的方式，根据方法是否返回值来选择。")]),a._v(" "),s("p",[a._v("当程序调用一个方法时，程序的控制权交给了被调用的方法。当被调用方法的返回语句执行或者到达方法体闭括号时候交还控制权给程序。")]),a._v(" "),s("p",[a._v("当方法返回一个值的时候，方法调用通常被当做一个值。例如：")]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("int larger = max(30, 40);\n")])])]),s("p",[a._v("如果方法返回值是 void，方法调用一定是一条语句。例如，方法 println 返回 void。下面的调用是个语句：")]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v('System.out.println("Hello World");\n')])])]),s("h3",{attrs:{id:"_3-3-构造方法"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3-3-构造方法"}},[a._v("#")]),a._v(" 3.3. 构造方法")]),a._v(" "),s("p",[a._v("每个类都有构造方法。如果没有显式地为类定义任何构造方法，Java 编译器将会为该类提供一个默认构造方法。")]),a._v(" "),s("p",[a._v("在创建一个对象的时候，至少要调用一个构造方法。构造方法的名称必须与类同名，一个类可以有多个构造方法。")]),a._v(" "),s("div",{staticClass:"language-java extra-class"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("public")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("class")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("Puppy")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("public")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("Puppy")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("public")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("Puppy")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("String")]),a._v(" name"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n        "),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("// 这个构造器仅有一个参数：name")]),a._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n")])])]),s("h2",{attrs:{id:"_4-变量"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_4-变量"}},[a._v("#")]),a._v(" 4. 变量")]),a._v(" "),s("p",[a._v("Java 支持的变量类型有：")]),a._v(" "),s("ul",[s("li",[s("code",[a._v("局部变量")]),a._v(" - 类方法中的变量。")]),a._v(" "),s("li",[s("code",[a._v("实例变量（也叫成员变量）")]),a._v(" - 类方法外的变量，不过没有 "),s("code",[a._v("static")]),a._v(" 修饰。")]),a._v(" "),s("li",[s("code",[a._v("类变量（也叫静态变量）")]),a._v(" - 类方法外的变量，用 "),s("code",[a._v("static")]),a._v(" 修饰。")])]),a._v(" "),s("p",[a._v("特性对比：")]),a._v(" "),s("table",[s("thead",[s("tr",[s("th",[a._v("局部变量")]),a._v(" "),s("th",[a._v("实例变量（也叫成员变量）")]),a._v(" "),s("th",[a._v("类变量（也叫静态变量）")])])]),a._v(" "),s("tbody",[s("tr",[s("td",[a._v("局部变量声明在方法、构造方法或者语句块中。")]),a._v(" "),s("td",[a._v("实例变量声明在方法、构造方法和语句块之外。")]),a._v(" "),s("td",[a._v("类变量声明在方法、构造方法和语句块之外。并且以 static 修饰。")])]),a._v(" "),s("tr",[s("td",[a._v("局部变量在方法、构造方法、或者语句块被执行的时候创建，当它们执行完成后，变量将会被销毁。")]),a._v(" "),s("td",[a._v("实例变量在对象创建的时候创建，在对象被销毁的时候销毁。")]),a._v(" "),s("td",[a._v("类变量在第一次被访问时创建，在程序结束时销毁。")])]),a._v(" "),s("tr",[s("td",[a._v("局部变量没有默认值，所以必须经过初始化，才可以使用。")]),a._v(" "),s("td",[a._v("实例变量具有默认值。数值型变量的默认值是 0，布尔型变量的默认值是 false，引用类型变量的默认值是 null。变量的值可以在声明时指定，也可以在构造方法中指定。")]),a._v(" "),s("td",[a._v("类变量具有默认值。数值型变量的默认值是 0，布尔型变量的默认值是 false，引用类型变量的默认值是 null。变量的值可以在声明时指定，也可以在构造方法中指定。此外，静态变量还可以在静态语句块中初始化。")])]),a._v(" "),s("tr",[s("td",[a._v("对于局部变量，如果是基本类型，会把值直接存储在栈；如果是引用类型，会把其对象存储在堆，而把这个对象的引用（指针）存储在栈。")]),a._v(" "),s("td",[a._v("实例变量存储在堆。")]),a._v(" "),s("td",[a._v("类变量存储在静态存储区。")])]),a._v(" "),s("tr",[s("td",[a._v("访问修饰符不能用于局部变量。")]),a._v(" "),s("td",[a._v("访问修饰符可以用于实例变量。")]),a._v(" "),s("td",[a._v("访问修饰符可以用于类变量。")])]),a._v(" "),s("tr",[s("td",[a._v("局部变量只在声明它的方法、构造方法或者语句块中可见。")]),a._v(" "),s("td",[a._v("实例变量对于类中的方法、构造方法或者语句块是可见的。一般情况下应该把实例变量设为私有。通过使用访问修饰符可以使实例变量对子类可见。")]),a._v(" "),s("td",[a._v("与实例变量具有相似的可见性。但为了对类的使用者可见，大多数静态变量声明为 public 类型。")])]),a._v(" "),s("tr",[s("td"),a._v(" "),s("td",[a._v("实例变量可以直接通过变量名访问。但在静态方法以及其他类中，就应该使用完全限定名：ObejectReference.VariableName。")]),a._v(" "),s("td",[a._v("静态变量可以通过：ClassName.VariableName 的方式访问。")])]),a._v(" "),s("tr",[s("td"),a._v(" "),s("td"),a._v(" "),s("td",[a._v("无论一个类创建了多少个对象，类只拥有类变量的一份拷贝。")])]),a._v(" "),s("tr",[s("td"),a._v(" "),s("td"),a._v(" "),s("td",[a._v("类变量除了被声明为常量外很少使用。")])])])]),a._v(" "),s("h3",{attrs:{id:"_4-1-变量修饰符"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_4-1-变量修饰符"}},[a._v("#")]),a._v(" 4.1. 变量修饰符")]),a._v(" "),s("ul",[s("li",[a._v("访问级别修饰符 - 如果变量是实例变量或类变量，可以添加访问级别修饰符（public/protected/private）")]),a._v(" "),s("li",[a._v("静态修饰符 - 如果变量是类变量，需要添加 static 修饰")]),a._v(" "),s("li",[a._v("final - 如果变量使用 fianl 修饰符，就表示这是一个常量，不能被修改。")])]),a._v(" "),s("h3",{attrs:{id:"_4-2-创建对象"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_4-2-创建对象"}},[a._v("#")]),a._v(" 4.2. 创建对象")]),a._v(" "),s("p",[a._v("对象是根据类创建的。在 Java 中，使用关键字 new 来创建一个新的对象。创建对象需要以下三步：")]),a._v(" "),s("ul",[s("li",[s("strong",[a._v("声明")]),a._v("：声明一个对象，包括对象名称和对象类型。")]),a._v(" "),s("li",[s("strong",[a._v("实例化")]),a._v("：使用关键字 new 来创建一个对象。")]),a._v(" "),s("li",[s("strong",[a._v("初始化")]),a._v("：使用 new 创建对象时，会调用构造方法初始化对象。")])]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v('public class Puppy{\n   public Puppy(String name){\n      //这个构造器仅有一个参数：name\n      System.out.println("小狗的名字是 : " + name );\n   }\n   public static void main(String[] args){\n      // 下面的语句将创建一个Puppy对象\n      Puppy myPuppy = new Puppy( "tommy" );\n   }\n}\n')])])]),s("h3",{attrs:{id:"_4-3-访问实例变量和方法"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_4-3-访问实例变量和方法"}},[a._v("#")]),a._v(" 4.3. 访问实例变量和方法")]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("/* 实例化对象 */\nObjectReference = new Constructor();\n/* 访问类中的变量 */\nObjectReference.variableName;\n/* 访问类中的方法 */\nObjectReference.methodName();\n")])])]),s("h2",{attrs:{id:"_5-访问权限控制"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_5-访问权限控制"}},[a._v("#")]),a._v(" 5. 访问权限控制")]),a._v(" "),s("h3",{attrs:{id:"_5-1-代码组织"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_5-1-代码组织"}},[a._v("#")]),a._v(" 5.1. 代码组织")]),a._v(" "),s("p",[s("strong",[a._v("当编译一个 .java 文件时，在 .java 文件中的每个类都会输出一个与类同名的 .class 文件。")])]),a._v(" "),s("p",[a._v("MultiClassDemo.java 示例：")]),a._v(" "),s("div",{staticClass:"language-java extra-class"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("class")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("MultiClass1")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("class")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("MultiClass2")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("class")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("MultiClass3")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("public")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("class")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("MultiClassDemo")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n")])])]),s("p",[a._v("执行 "),s("code",[a._v("javac MultiClassDemo.java")]),a._v(" 命令，本地会生成 MultiClass1.class、MultiClass2.class、MultiClass3.class、MultiClassDemo.class 四个文件。")]),a._v(" "),s("p",[s("strong",[a._v("Java 可运行程序是由一组 .class 文件打包并压缩成的一个 .jar 文件")]),a._v("。Java 解释器负责这些文件的查找、装载和解释。"),s("strong",[a._v("Java 类库实际上是一组类文件（.java 文件）。")])]),a._v(" "),s("ul",[s("li",[s("strong",[a._v("其中每个文件允许有一个 public 类，以及任意数量的非 public 类")]),a._v("。")]),a._v(" "),s("li",[s("strong",[a._v("public 类名必须和 .java 文件名完全相同，包括大小写。")])])]),a._v(" "),s("p",[a._v("程序一般不止一个人编写，会调用系统提供的代码、第三方库中的代码、项目中其他人写的代码等，不同的人因为不同的目的可能定义同样的类名/接口名，这就是命名冲突。")]),a._v(" "),s("p",[a._v("Java 中为了解决命名冲突问题，提供了包（"),s("code",[a._v("package")]),a._v("）和导入（"),s("code",[a._v("import")]),a._v("）机制。")]),a._v(" "),s("h4",{attrs:{id:"package"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#package"}},[a._v("#")]),a._v(" package")]),a._v(" "),s("p",[a._v("包（"),s("code",[a._v("package")]),a._v("）的原则：")]),a._v(" "),s("ul",[s("li",[a._v("包类似于文件夹，文件放在文件夹中，类和接口则放在包中。为了便于组织，文件夹一般是一个"),s("strong",[a._v("有层次的树形结构")]),a._v("，包也类似。")]),a._v(" "),s("li",[s("strong",[a._v("包名以逗号 "),s("code",[a._v(".")]),a._v(" 分隔，表示层次结构。")])]),a._v(" "),s("li",[a._v("Java 中命名包名的一个惯例是使用域名作为前缀，因为域名是唯一的，一般按照域名的反序来定义包名，比如，域名是：apache.org，包名就以 org.apache 开头。")]),a._v(" "),s("li",[a._v("**包名和文件目录结构必须完全匹配。**Java 解释器运行过程如下：\n"),s("ul",[s("li",[a._v("找出环境变量 CLASSPATH，作为 .class 文件的根目录。")]),a._v(" "),s("li",[a._v("从根目录开始，获取包名称，并将逗号 "),s("code",[a._v(".")]),a._v(" 替换为文件分隔符（反斜杠 "),s("code",[a._v("/")]),a._v("），通过这个路径名称去查找 Java 类。")])])])]),a._v(" "),s("h4",{attrs:{id:"import"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#import"}},[a._v("#")]),a._v(" import")]),a._v(" "),s("p",[a._v("同一个包下的类之间互相引用是不需要包名的，可以直接使用。但如果类不在同一个包内，则必须要知道其所在的包，使用有两种方式：")]),a._v(" "),s("ul",[s("li",[a._v("通过类的完全限定名")]),a._v(" "),s("li",[a._v("通过 import 将用到的类引入到当前类")])]),a._v(" "),s("p",[a._v("通过类的完全限定名示例：")]),a._v(" "),s("div",{staticClass:"language-java extra-class"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("public")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("class")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("PackageDemo")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("public")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("static")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("void")]),a._v(" main "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("String")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),a._v("args"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n        "),s("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("System")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("out"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("println")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("new")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[s("span",{pre:!0,attrs:{class:"token namespace"}},[a._v("java"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("util"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")])]),a._v("Date")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n        "),s("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("System")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("out"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("println")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("new")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[s("span",{pre:!0,attrs:{class:"token namespace"}},[a._v("java"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("util"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")])]),a._v("Date")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n")])])]),s("p",[a._v("通过 "),s("code",[a._v("import")]),a._v(" 导入其它包的类到当前类：")]),a._v(" "),s("div",{staticClass:"language-java extra-class"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("import")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token namespace"}},[a._v("java"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("util"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")])]),s("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("Date")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("public")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("class")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("PackageDemo2")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("public")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("static")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("void")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("main")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("String")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),a._v(" args"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n        "),s("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("System")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("out"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("println")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("new")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("Date")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n        "),s("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("System")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("out"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("println")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("new")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("Date")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n")])])]),s("blockquote",[s("p",[a._v("说明：以上两个示例比较起来，显然是 "),s("code",[a._v("import")]),a._v(" 方式，代码更加整洁。")])]),a._v(" "),s("blockquote",[s("p",[a._v("扩展阅读：https://www.cnblogs.com/swiftma/p/5628762.html")])]),a._v(" "),s("h3",{attrs:{id:"_5-2-访问权限修饰关键字"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_5-2-访问权限修饰关键字"}},[a._v("#")]),a._v(" 5.2. 访问权限修饰关键字")]),a._v(" "),s("p",[a._v("访问权限控制的等级，从最大权限到最小权限依次为：")]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("public > protected > 包访问权限（没有任何关键字）> private\n")])])]),s("ul",[s("li",[s("code",[a._v("public")]),a._v(" - 表示任何类都可以访问；")]),a._v(" "),s("li",[s("code",[a._v("包访问权限")]),a._v(" - 包访问权限，没有任何关键字。它表示当前包中的所有其他类都可以访问，但是其它包的类无法访问。")]),a._v(" "),s("li",[s("code",[a._v("protected")]),a._v(" - 表示子类可以访问，此外，同一个包内的其他类也可以访问，即使这些类不是子类。")]),a._v(" "),s("li",[s("code",[a._v("private")]),a._v(" - 表示其它任何类都无法访问。")])]),a._v(" "),s("h2",{attrs:{id:"_6-接口"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_6-接口"}},[a._v("#")]),a._v(" 6. 接口")]),a._v(" "),s("p",[a._v("接口是对行为的抽象，它是抽象方法的集合，利用接口可以达到 API 定义和实现分离的目的。")]),a._v(" "),s("p",[a._v("接口，不能实例化；不能包含任何非常量成员，任何 field 都是隐含着 "),s("code",[a._v("public static final")]),a._v(" 的意义；同时，没有非静态方法实现，也就是说要么是抽象方法，要么是静态方法。")]),a._v(" "),s("p",[a._v("Java 标准类库中，定义了非常多的接口，比如 "),s("code",[a._v("java.util.List")]),a._v("。")]),a._v(" "),s("div",{staticClass:"language-java extra-class"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("public")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("interface")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("Comparable")]),s("span",{pre:!0,attrs:{class:"token generics"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("<")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("T")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(">")])]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("public")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("int")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("compareTo")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("T")]),a._v(" o"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n")])])]),s("h2",{attrs:{id:"_7-抽象类"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_7-抽象类"}},[a._v("#")]),a._v(" 7. 抽象类")]),a._v(" "),s("p",[a._v("抽象类是不能实例化的类，用 "),s("code",[a._v("abstract")]),a._v(" 关键字修饰 "),s("code",[a._v("class")]),a._v("，其目的主要是代码重用。除了不能实例化，形式上和一般的 Java 类并没有太大区别，可以有一个或者多个抽象方法，也可以没有抽象方法。抽象类大多用于抽取相关 Java 类的共用方法实现或者是共同成员变量，然后通过继承的方式达到代码复用的目的。")]),a._v(" "),s("p",[a._v("Java 标准库中，比如 "),s("code",[a._v("collection")]),a._v(" 框架，很多通用部分就被抽取成为抽象类，例如 "),s("code",[a._v("java.util.AbstractList")]),a._v("。")]),a._v(" "),s("ol",[s("li",[a._v("抽象类不能被实例化(初学者很容易犯的错)，如果被实例化，就会报错，编译无法通过。只有抽象类的非抽象子类可以创建对象。")]),a._v(" "),s("li",[a._v("抽象类中不一定包含抽象方法，但是有抽象方法的类必定是抽象类。")]),a._v(" "),s("li",[a._v("抽象类中的抽象方法只是声明，不包含方法体，就是不给出方法的具体实现也就是方法的具体功能。")]),a._v(" "),s("li",[a._v("构造方法，类方法（用 static 修饰的方法）不能声明为抽象方法。")]),a._v(" "),s("li",[a._v("抽象类的子类必须给出抽象类中的抽象方法的具体实现，除非该子类也是抽象类。")])]),a._v(" "),s("h2",{attrs:{id:"_8-参考资料"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_8-参考资料"}},[a._v("#")]),a._v(" 8. 参考资料")]),a._v(" "),s("ul",[s("li",[a._v("书籍\n"),s("ul",[s("li",[s("a",{attrs:{href:"https://book.douban.com/subject/2130190/",target:"_blank",rel:"noopener noreferrer"}},[a._v("Java 编程思想"),s("OutboundLink")],1)]),a._v(" "),s("li",[s("a",{attrs:{href:"https://book.douban.com/subject/3146174/",target:"_blank",rel:"noopener noreferrer"}},[a._v("Java 核心技术（卷 1）"),s("OutboundLink")],1)]),a._v(" "),s("li",[s("a",{attrs:{href:"https://book.douban.com/subject/4496038/",target:"_blank",rel:"noopener noreferrer"}},[a._v("Head First Java"),s("OutboundLink")],1)])])]),a._v(" "),s("li",[a._v("文章\n"),s("ul",[s("li",[s("a",{attrs:{href:"https://www.zhihu.com/question/20275578/answer/26577791",target:"_blank",rel:"noopener noreferrer"}},[a._v("面向对象编程的弊端是什么？ - invalid s 的回答"),s("OutboundLink")],1)]),a._v(" "),s("li",[a._v("https://www.cnblogs.com/swiftma/p/5628762.html")])])])])])}),[],!1,null,null,null);t.default=v.exports}}]);