import React, { memo } from 'react';
import { useHistory } from 'react-router';

import { Card, Row, Col, Tag, Button } from 'antd';
import { MdTravelExplore, MdOutlineForum } from 'react-icons/md';
import { FiTwitter } from 'react-icons/fi';
import { BiBookBookmark } from 'react-icons/bi';
import { SiDiscord, SiTelegram, SiGithub } from 'react-icons/si';
import { GiMirrorMirror } from 'react-icons/gi';
import { IoIosArrowRoundBack } from 'react-icons/io';

import { BarChartOutlined, LinkOutlined, HeartOutlined, PieChartOutlined, ArrowLeftOutlined } from '@ant-design/icons';
import { ICoin } from '@/api/def';
import { strToFixNum } from '@/utils/cal';
import { DetailIntroCard } from './style';
interface Iprops {
  coin:ICoin;
};

export default memo(function DetailIntroCardComponent(props:Iprops) {
  const { coin } = props;
  const history = useHistory();
  const backDiscovery = () => {
    history && history.push('/discovery');
  };
  return (
    <DetailIntroCard>
      <Button type='link' className='intro-button-back' onClick={ backDiscovery }>
        <span className='intro-button-back-left'><IoIosArrowRoundBack size={24}/></span>
        <span className='intro-button-back-right'>返回</span>
      </Button>
      <Card>
        <Row style={{ marginBottom: '10px' }}>
          <Col
            // className={'debug'}
            xs={{ span: 16 }}
            lg={{ span: 16 }}
          >
            <div className='intro-top'>
              <img src={coin.imgSrc} style={{ height: '104px', width: '104px' }} />
              <div className='intro-top-name'>
                <span style={{ fontSize: '24px', fontWeight: 'bold', lineHeight: '34px', marginBottom: '9px' }} >
                  { `${coin.fullName} (${coin.briefName})` }
                </span>
                <div >
                  <Tag color='magenta' style={{ textAlign: 'center', border: 'none', lineHeight: '24px' }} className='intro-top-tag'>
                    { coin.tag }
                  </Tag>
                </div>
              </div>
            </div>
          </Col>
          <Col
            className={'share_and_collect'}
            xs={{ span: 8 }}
            lg={{ span: 8 }}
          >
            <Button
              size='small'
              shape='round'
              type='link'
            >
              <HeartOutlined />
              <span style={{ fontSize: '15px' }}>收藏</span>
            </Button>
            <Button
              size='small'
              shape='round'
              type='link'
            >
              <LinkOutlined />
              <span style={{ fontSize: '15px' }}>分享</span>
            </Button>
          </Col>
        </Row>
        <Row style={{ marginBottom: '50px' }}>
          <Col
            // className={'debug'}
            xs={{ span: 24 }}
            lg={{ span: 13 }}
            style={{ marginTop: '20px' }}
          >
            <span style={{ fontSize: '16px' }}>{ coin.detail }</span>
          </Col>
          <Col
            className={'priceWrapper'}
            style={{ marginTop: '20px' }}
            xs={{ span: 24 }}
            lg={{ span: 11 }}
          >
            <span style={{ fontSize: '30px' }}>
              <p style={{ fontSize: '14px', marginTop: '-14px', color: '#828282' }}> {coin.briefName} 价格</p>
              $ { Number(coin.price) > 1 ? strToFixNum(coin.price, 2).toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, '$1,') : Number(coin.price).toPrecision(4) }
            </span>
            <span className='intro-icon-percent'
              style={{
                backgroundColor: Number(coin.percent_change_24h) < 0 ? '#ea3943' : '#16c784',
                marginLeft: '20px',
                fontSize: '20px',
              }} >
              {/* fix the bug of negative price */}
              { Number(coin.percent_change_24h) < 0 ? '- ' + strToFixNum( (Number(coin.percent_change_24h) * -1).toString(), 2) : '+ ' + strToFixNum(coin.percent_change_24h, 2) }%
            </span>
          </Col>
        </Row>
        <Row >
          <Col
            xs={{ span: 24 }}
            sm={{ span: 24 }}
            lg={{ span: 13 }}
            className={'links'}
          >
            {
              coin.officalUrl &&
                <div className='intro-foot-button'>
                  <a href={coin.officalUrl} target='_blank' rel='noreferrer'>
                    <MdTravelExplore style={{ marginLeft: '0.5px', fontSize: '24px' }}/>
                    <div>官网</div>
                  </a>
                </div>
            }
            {
              coin.whiteBookUrl &&
                <div className='intro-foot-button'>
                  <a href={coin.whiteBookUrl} target='_blank' rel='noreferrer'>
                    <BiBookBookmark style={{ marginLeft: '10px', fontSize: '24px' }}/>
                    <div>白皮书</div>
                  </a>
                </div>
            }
            {
              coin.twitterUrl &&
                <div className='intro-foot-button'>
                  <a href={coin.twitterUrl} target='_blank' rel='noreferrer'>
                    <FiTwitter style={{ marginLeft: '10px', fontSize: '24px' }}/>
                    <div>Twitter</div>
                  </a>
                </div>
            }
            {
              coin.discordUrl &&
                <div className='intro-foot-button'>
                  <a href={coin.discordUrl} target='_blank' rel='noreferrer'>
                    <SiDiscord style={{ marginLeft: '12px', fontSize: '24px' }}/>
                    <div>Discord</div>
                  </a>
                </div>

            }
            {
              coin.telegramUrl &&
                <div className='intro-foot-button'>
                  <a href={coin.telegramUrl} target='_blank' rel='noreferrer'>
                    <SiTelegram style={{ marginLeft: '18px', fontSize: '24px' }}/>
                    <div>Telegram</div>
                  </a>
                </div>

            }
            {
              coin.mirrowUrl &&
                <div className='intro-foot-button'>
                  <a href={coin.percent_change_24h} target='_blank' rel='noreferrer'>
                    <GiMirrorMirror style={{ marginLeft: '6.1px', fontSize: '24px' }}/>
                    <div>mirror</div>
                  </a>
                </div>

            }
            {
              coin.communityUrl &&
                <div className='intro-foot-button'>
                  <a href={coin.percent_change_24h} target='_blank' rel='noreferrer'>
                    <MdOutlineForum style={{ marginLeft: '2.5px', fontSize: '24px' }}/>
                    <div>论坛</div>
                  </a>
                </div>
            }
            {
              coin.githubUrl &&
                <div className='intro-foot-button'>
                  <a href={coin.githubUrl} target='_blank' rel='noreferrer'>
                    <SiGithub style={{ marginLeft: '10px', fontSize: '24px' }}/>
                    <div>GitHub</div>
                  </a>
                </div>
            }
            {
              coin.githubUrl &&
                <div className='intro-foot-button'>
                  <a href={coin.githubUrl} target='_blank' rel='noreferrer'>
                    <BarChartOutlined style={{ fontSize: '24px' }}/>
                    <div>数据</div>
                  </a>
                </div>
            }
          </Col>
        </Row>
      </Card>
    </DetailIntroCard>
  );
});
