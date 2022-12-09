import React, { memo } from 'react';
import LSAppFooter from '@components/footer';

import { TermWrapper } from './style';
// import ReactMarkdown from 'react-markdown';

export default memo(function Term() {
  return (
    <TermWrapper>
      <div className='term-container'>
        <div className='term-text-area'>
          <p className='head-text'>QKLData用户服务协议</p>
          <p className='small-text'>更新时间：2021 年 10 月 1 日</p>
          <p className='small-text'>您在使用QKLData（以下简称“公司”或“我们”）所经营的域名为https://www.lianshucha.com的网站提供的产品和/或服务前，请您仔细阅读《QKLData服务协议》（以下简称“本协议”），本协议是您与公司之间关于您注册、登录、使用QKLData所订立的相关权利义务协议，如您对本协议的内容有任何疑问请及时咨询公司客服。当您勾选页面单选框，点击“确认”或“同意”按钮，同意本协议后，或在我们更新本协议后（我们会及时提示您更新的情况）勾选页面单选框，点击“确认”或“同意”按钮并继续使用QKLData提供的产品与/或服务，即表示您已充分阅读、理解并接受本协议的全部内容，您接受并将遵守本协议约定。</p>
          <p className='small-text'>我们会根据情况不时地更新本协议的内容，均会通过公告或者私信通知或弹窗更新提示等方式告知您；本协议一旦修改后将替换QKLData之前的服务协议，如您对修改后的本协议有疑问请及时联系公司客服。若您不同意本协议及/或公司对其的修正或更改，请您立即停止使用QKLData所提供的全部服务和/或产品，如您点击“同意”或“确认”并继续使用，则视为接受本协议的变更，并同意以后在使用QKLData提供的全部服务和/或产品时须遵循新的服务协议。</p>
          <p className='small-text'>本协议中的“用户”包括注册用户及非注册用户。凡未注册QKLData帐号的用户，自使用QKLData提供的产品与/或服务时即自动成为QKLData的“非注册用户”，须遵循除本协议用户注册规定以外的其他所有条款。</p>
          <p className='big-text'>一、使用规则</p>
          <p className='small-text'>（1）QKLData授予您临时的、严仅对个人的、可撤销的、不可转让的有限许可，仅服务于非商业目的。 您的账号是您个人的，您不得与任何其他人（包括但不限于您的同事、家庭成员和类似人员）转让或共享您的账号。</p>
          <p className='small-text'>（2）您无需用户帐号即可使用QKLData提供的产品与/或服务。如果您想使用QKLData提供的更多功能，您必须注册相应帐号并且于注册页面上提供相关的个人信息。您可以按照QKLData的说明随时终止使用您的帐号，我们将会依据本协议规定保留或终止您的帐号。</p>
          <p className='small-text'>（3）您充分了解并同意，为了更好地促进信息分享及宣传推广，您授权QKLData可在QKLData及其关联公司产品和服务上使用您在QKLData开放平台上发布的任何公开信息，以及为宣传推广之目的将前述内容许可给第三方使用。您对QKLData及其关联公司的前述授权并不改变您对前述内容的所有权及知识产权归属，也并不影响您行使对前述内容的合法权利。</p>
          <p className='small-text'>（4）您充分了解并同意，我们保留因业务发展需要享有单方面对QKLData提供的产品与/或服务的全部或部分服务内容在任何时候不经任何通知的情况下变更、暂停、限制、终止或撤销的权利，您需承担此风险。我们更新本协议相关条款后，用户可重新在QKLData官方网站查阅最新版QKLData服务协议。在我们更新本协议后，如果用户不接受修改后的条款，请立即停止使用QKLData提供的产品与/或服务。</p>
          <p className='small-text'>（5）QKLData提供的产品与/或服务中可能包括广告，您同意在使用过程中显示QKLData和第三方供应商、合作伙伴提供的广告。用户须明白，QKLData提供的产品和/或服务中可能包含第三方供应商和合作伙伴广告，公司将尽合理努力对于广告主和广告内容进行审核，但是公司无法向您保证您通过该广告获得或体验的最终服务或产品的真实性、合法性及完全符合您的预期做任何保证和担保。</p>
          <p className='small-text'>（6）公司和/或合作单位将根据市场与技术的发展，向用户提供与QKLData相关的各种互联网以及移动通信增值服务，包括免费和收费的增值服务。公司和/或合作单位保留对相关增值服务收取费用及改变收费标准、方式的权利，如相关服务由免费变更为收费服务，公司和/或合作单位将以适当的形式通知，用户可自主选择接受或拒绝收费服务，并保证在使用收费服务时，将按照公司和/或合作单位相关收费规定支付费用，否则公司有权不向用户提供该收费服务。</p>
          <p className='small-text'>（7）您应确保您向QKLData提供的任何信息的准确性、完整性、合法性和适当性。您应确保您对自己的密码及用户名的保密。您不得向任何其他人披露或以其他方式提供它们。您应始终确保您是您的密码和用户名的用户，并对所有的使用和访问承担全部责任。如果您发现您可能您不能确保个人数据安全，例如未经授权披露或使用您的密码，您有义务立即通知QKLData。</p>
          <p className='small-text'>（8）您承认：</p>
          <p className='small-text'>1）QKLData不提供投资建议，并且您不会以这样的方式看待QKLData提供的任何服务内容；</p>
          <p className='small-text'>2）QKLData不推荐任何金融产品；</p>
          <p className='small-text'>3）QKLData不建议您购买、出售或持有任何金融资产；</p>
          <p className='small-text'>（9）我们可依其合理判断，对违反有关法律法规或本协议约定，或侵犯、妨害、威胁任何人权利或安全的内容，或者假冒他人的行为，我们有权依法停止传输、发布任何前述内容，并有权依其自行判断对违反本条款的任何人士采取适当的法律行动，包括但不限于，从QKLData提供的产品与/或服务中删除具有违法性、侵权性、不当性等内容，终止违反者的用户资格，阻止其使用QKLData提供全部或部分产品与/或服务，并且依据法律法规保存有关信息并向有关部门报告等。如经司法部门确认我们上述判断有误，我们将根据相关法律承担由此造成的责任。</p>
          <p className='small-text'>（10）您充分了解：QKLData提供的产品与/或服务同大多数互联网服务一样，受包括但不限于用户原因、网络服务质量、社会环境等因素的差异影响，可能受到各种安全问题的侵扰，如他人利用用户的资料，造成现实生活中的骚扰；用户下载安装的其他软件或访问的其他网站中含有“特洛伊木马”等病毒，威胁到用户的计算机信息和数据的安全，继而影响QKLData产品与/或服务的正常使用等等。您应加强信息安全及使用者资料的保护意识，要注意加强密码保护，以免遭致损失和骚扰。</p>
          <p className='small-text'>（11）本网站的一些基本功能是免费提供的，而某些高级功能需要支付服务费（“订阅费”）。当您注册高级功能时，网站会描述高级功能的功能以及相应的订阅费用。订阅费需提前支付且不可退还。必须通过网站上针对相应高级功能规定的可接受的付款方式进行付款。</p>
          <p className='small-text'>（12）您同意自行承担使用服务的风险，QKLData不对服务做出任何明示或暗示的保证、陈述或认可。特别是，您同意 QKLData 不对服务和网站的正确性、准确性和完整性做出任何保证。QKLData 不保证服务的不间断可用性，并且不对服务传输或数据传输中的任何延迟、错误或中断负责。使用本服务，即表示您承认并同意互联网传输永远不会完全私密或安全。您了解向服务传输或通过服务传输的信息可能会被他人拦截，并且您承担违反安全规定的风险以及由此产生的后果。您同意不向我们发送任何敏感的个人信息。</p>
          <p className='small-text'>（13）尽管本网站和本服务可在全球范围内访问，但并非所有通过本服务或在本服务上讨论、引用、提供或提供的功能、产品或服务都可供所有人或在所有地理位置使用，如果您选择从QKLData所在地境外访问服务，则是您主动这样做，您全权负责遵守适用的当地法律。</p>
          <p className='big-text'>二、用户的权利与义务</p>
          <p className='small-text'>（1）QKLData帐号的所有权归公司所有，用户完成申请注册手续后，获得QKLData帐号的使用权，该使用权仅属于初始申请注册人，禁止赠与、借用、租用、转让或售卖。公司因本协议的相关规定，有权回收用户的QKLData帐号。</p>
          <p className='small-text'>（2）用户须对在QKLData上的注册信息的真实性、合法性、有效性承担全部责任。同时用户不得冒充他人、不得利用他人的名义传播任何信息；不得恶意使用注册帐号导致其他用户误认；否则公司有权立即停止提供服务，收回QKLData帐号并由您独自承担由此而产生的一切法律责任。</p>
          <p className='small-text'>（3）用户须对在QKLData上所传输、发布信息的真实性、合法性、无害性、有效性等全权负责，与用户所传输、发布的信息相关的任何法律责任由用户自行承担，与公司无关。</p>
          <p className='small-text'>（4）用户有权更改、删除在QKLData上的个人资料、注册信息及传输、发布的信息等内容，但需注意，删除有关内容的同时也会删除任何您储存在系统中的文字和图片，用户需承担该风险。</p>
          <p className='small-text'>（5）为了保障用户帐号信息安全：用户有责任妥善保管注册帐号信息、帐号密码以及此帐号下发生的包括网络交易在内的任何活动的安全；用户需要对注册帐号以及密码下的行为承担法律责任；当发生非本人授权的帐号或密码登录或任何违反服务条款的登录，用户须立即通知公司；由于他人使用自己帐号和密码而导致公司或QKLData其他用户的任何损失，用户须对此负责；任何情况下用户不得使用除自己帐号以外的其他任何帐号登录，否则公司有权冻结并审查此类帐号。</p>
          <p className='small-text'>（6）用户应遵守本协议的各项条款，正确、适当地使用QKLData提供的产品与/或服务，如因用户违反本协议中的任何条款，公司有权依据协议终止向违约用户帐号提供QKLData产品与/或服务。同时，公司保留在任何时候收回QKLData帐号、用户名的权利。</p>
          <p className='small-text'>（7）用户注册QKLData帐号后如果长期（自注册之日起超过3个月）不登录该帐号，公司有权通知您回收该帐号并清除您相关的注册信息，以免造成资源浪费，由此带来问题均由用户自行承担。</p>
          <p className='small-text'>（8）用户不得利用QKLData或QKLData提供的产品与/或服务制作、上载、复制、传输、发布以下内容：</p>
          <p className='small-text'>1）反对法律所确定的基本原则的；</p>
          <p className='small-text'>2）危害国家安全，泄露国家秘密，颠覆国家政权，破坏国家统一的；</p>
          <p className='small-text'>3）损害国家荣誉和利益的；</p>
          <p className='small-text'>4）煽动民族仇恨、民族歧视，破坏民族团结的；</p>
          <p className='small-text'>5）破坏国家宗教政策，宣扬邪教和封建迷信的；</p>
          <p className='small-text'>6）散布谣言，扰乱社会秩序，破坏社会稳定的；</p>
          <p className='small-text'>7）散布淫秽、色情、赌博、暴力、凶杀、恐怖或者教唆犯罪的；</p>
          <p className='small-text'>8）侮辱或者诽谤他人，侵害他人合法权益的；</p>
          <p className='small-text'>9）含有法律、行政法规禁止的其他内容的信息。</p>
          <p className='small-text'>10）QKLData相关服务规则规定的禁止制作、上载、复制、传输、发布的内容。</p>
          <p className='small-text'>（9）用户在使用QKLData提供的产品和/或服务前，同意不会有以下行为，否则用户对因违反上述限制而造成的任何损害承担全部责任：</p>
          <p className='small-text'>1）利用QKLData提供的产品和/或服务从事任何违法活动；</p>
          <p className='small-text'>2）尝试使用未经授权的方式访问服务的任何部分或任何QKLData服务器网络；</p>
          <p className='small-text'>3）侵犯任何个人或实体的权利，包括但不限于其知识产权，隐私，形象或合同权利；</p>
          <p className='small-text'>4）干扰或损坏服务的任何部分，包括但不限于使用病毒，僵尸程序，特洛伊木马，有害代码，DDOS攻击，拒绝服务攻击，数据包或IP欺骗，伪造路由或电子邮件地址信息或类似方法或技术；</p>
          <p className='small-text'>5）在无公司的明确书面许可的情况下使用脚本、机器人、爬虫或其他自动机制收集信息或以其他方式与服务交互；</p>
          <p className='small-text'>6）未经公司书面许可以向他人出售牟利为目的使用QKLData的任何内容，此种使用包括不限于以任何形式复制、仿制、修改、分发、转让、出售、出版、广播、执行、传输、许可或传播QKLData提供的产品和/或服务的任何部分或内容。</p>
          <p className='small-text'>（10）您一旦违反违反本协议或QKLData相关服务规则的规定，我们有权随时注销您的帐号以及删除您在QKLData上发布的所有信息。</p>
          <p className='small-text'>（11）我们注销您的帐号后，不排除还会保留您在QKLData上所发布的信息。若您需要删除在QKLData上所发布的信息，可随时通过本协议中的联系方式联系我们进行处理。</p>
          <p className='small-text'>（12）根据本条款，您不得：</p>
          <p className='small-text'>1）复制、更改、修改或模糊服务的内容或数据；不得将内容或代码用于商业目的</p>
          <p className='small-text'>2）公开展示内容或代码（无论是出于商业目的还是非商业目的）</p>
          <p className='small-text'>3）尝试对网站上包含的软件进行逆向工程；</p>
          <p className='small-text'>4）在违反任何适用法律或法规的情况下使用</p>
          <p className='small-text'>5）复制、转发、传播、出售、出版服务或其任何部分；</p>
          <p className='small-text'>6）将内容或代码转移给其他用户，并将数据“镜像”到另一个服务器。</p>
          <p className='small-text'>（13）用户须明白，公司对QKLData提供的产品和/或服务内容力求准确、完整和及时，但并不对其准确性、完整性和及时性做出任何保证。对任何因直接或间接使用QKLData提供的产品和/或服务内容而造成的损失，包括但不限于因有关产品和/或服务内容不准确、不完整而导致的损失，公司不承担任何法律责任。公司亦不保证所设置的外部链接的准确性和完整性。用户通过QKLData与其他网站的链接而获得其他网站内容，其风险责任自负，公司对此不承担任何法律责任。</p>
          <p className='small-text'>（14）用户违反本协议或QKLData相关服务规则的规定，导致或产生的任何第三方主张的任何索赔、要求或损失，包括合理的律师费，用户同意赔偿公司与合作公司、关联公司，并使之免受损害。</p>
          <p className='big-text'>三、知识产权保护</p>
          <p className='small-text'>（1）QKLData是由公司开发。QKLData的一切版权、商标权、专利权、商业秘密等知识产权，以及与软件相关的所有信息内容，包括但不限于：文字表述及其组合、图标、图饰、图表、色彩、界面设计、版面框架、有关数据、印刷材料、或电子文档等均受知识产权法律法规的保护，除涉及第三方授权的软件或技术外，公司享有上述知识产权。</p>
          <p className='small-text'>（2）未经公司书面许可您不得将QKLData产品或服务本身享有的相关知识产权权利（包括但不限于商标、软著、专利）进行复制、更改、修改或通过其他方式创造衍生作品用于任何商业目的；您可以在不侵害公司声誉的情况下，以非商业目的合理使用QKLData商标；公司免费或收费为前提向您提供的任何QKLData产品和/或服务并不代表公司将该QKLData产品和/或服务相关的知识产权权利授予或转让给您使用，公司和您另有明确书面约定除外。</p>
          <p className='small-text'>（3）保留权利：未明示授权的其他一切权利仍归公司所有，用户使用其他权利时须另外取得公司的书面同意。</p>
          <p className='big-text'>四、协议完整性</p>
          <p className='small-text'>请查阅我们的《QKLData隐私政策》，《QKLData隐私政策》为与本协议效力等同且不可分割的一部分。</p>
          <p className='small-text'>这些条款和条件的所有规定都是可分割的。如果这些条款和条件的任何条款全部或部分无效或变得无效，这不影响其余条款的有效性。无效或无效的条款应替换为法律上可行且最接近无效或无效内容的条款。</p>
          <p className='small-text'>您可以通过打印以书面形式保存这些条款和条件作为记录，并且您放弃任何其他要求这些条款和条件由书面文件证明的要求。</p>
          <p className='small-text'>这些条款和条件以及隐私声明QKLData发布的任何其他法律声明，构成您与QKLData之间关于您使用服务的完整协议。</p>
          <p className='small-text'>QKLData未能坚持或强制严格执行这些条款和条件，不应被视为QKLData放弃任何规定或它有权执行这些条款和条件的任何权利。任何此类弃权必须以书面形式作出才能生效。</p>
          <p className='small-text'>未经QKLData事先书面同意，您不得转让或转让您在这些条款和条件或与 QKLData 达成的任何其他协议中包含的任何权利和义务。</p>
          <p className='small-text'>这些条款和条件中的任何内容均不得解释为您在与QKLData之间建立雇佣合同、合资企业、代理或任何形式的简单合伙关系。</p>
          <p className='big-text'>五、免责声明</p>
          <p className='small-text'>本网站和服务均不提供任何投资建议。所有数据仅供参考，不用于交易目的。虽然 QKLData 使用商业上合理的努力定期更新网站和服务上提供的信息，但QKLData无法保证所提供的信息是准确、完整或最新的。</p>
          <p className='small-text'>任何投资决策均不得基于网站或服务中包含的信息，您应对自己的投资决策承担全部责任。对于因您根据QKLData提供的信息做出或做出的任何投资决策而引起的任何伤害、损失或损害，QKLData概不负责。服务中包含的任何内容均不构成任何类型的投资建议或建议（即关于是否“购买”、“出售”、“持有”或参与或不参与任何其他涉及任何加密货币的交易的建议）。我们提供的所有信息都是非个人信息，并非根据您的需要量身定制。QKLData不会就任何加密货币的未来或预期价值发表任何意见，并且QKLData不会明确或暗示推荐或建议任何类型的投资策略。使用本网站和服务即表示您承认这些免责声明。</p>
          <p className='small-text'>任何加密货币都是一种高风险投资，可能会导致其价值完全丧失，并且完全受市场动态和供需水平的影响。它的价值容易受到强烈波动的影响，甚至可能涉及不可预见的任意变化。在这些情况下，建议在处理加密货币时要高度谨慎。一经同意本协议使用我们的网站和服务，即代表您已了解上述高风险。</p>
          <p className='big-text'>六、违反和/或不遵守这些条款和条件</p>
          <p className='small-text'>您同意，如果QKLData自行裁定您违反了这些条款和条件或其他可能与您使用服务相关的协议。如果QKLData因上述原因终止服务，则无需退还订阅费。</p>
          <p className='small-text'>您还同意，您对这些条款和条件的任何违反都将对QKLData造成无法弥补的损害，而金钱赔偿不足以弥补这种损害，并且您同意QKLData在此类情况下获得QKLData认为必要或适当的任何条件或补偿。</p>
          <p className='small-text'>您同意完全赔偿QKLData、其员工、董事、承包商和附属公司，并且QKLData 免受任何因：(1) 您违反这些条款和条件或任何适用的法律或法规， (2) 您违反第三方的任何权利；(3) 您与任何第三方之间的任何争议或问题。</p>
          <p className='big-text'>七、协议的期限和终止时间</p>
          <p className='small-text'>只要您维护用户帐户，条款和条件就一直有效。付费高级功能的合同期限在网站上针对相应付费服务进行了规定；</p>
          <p className='small-text'>如果QKLData裁定您违反了适用法律或存在违规行为，QKLData可以立即终止向您提供服务并停用您对服务（包括网站）的访问这些条款和条件的一项或多项规定。</p>
          <p className='big-text'>八、争议解决</p>
          <p className='small-text'>本服务协议及条款成立的依据及效力依据为香港法律，相关纷争委托给香港法院。</p>
          <p className='small-text'>根据这些条款和条件提出的任何索赔必须在诉讼因由产生后一 (1) 年内提出，否则此类索赔或诉讼因由将被逾期。</p>
          <p className='small-text'>您同意在此处的任何争议中计算机记录和电子证据的可接受性。</p>
          <p className='small-text'>如果您对我们的条款和条件有任何疑问，请联系我们。</p>
        </div>
      </div>
      <LSAppFooter/>
    </TermWrapper>
  );
});
