import React from 'react';
import styled from 'styled-components/macro';

import { MAIN_STORY, OPINION_STORIES, SECONDARY_STORIES } from '../../data';
import { QUERIES } from '../../constants';

import SectionTitle from '../SectionTitle';
import MainStory from '../MainStory';
import SecondaryStory from '../SecondaryStory';
import OpinionStory from '../OpinionStory';
import Advertisement from '../Advertisement';

const MainStoryGrid = () => {
  return (
    <Wrapper>
      <MainStorySection>
        <MainStory {...MAIN_STORY} />
      </MainStorySection>

      <SecondaryStorySection>
        <StoryList>
          {SECONDARY_STORIES.map((story, index) => (
            <VerticalStoryWrapper key={story.id}>
              <SecondaryStory {...story} />
            </VerticalStoryWrapper>
          ))}
        </StoryList>
      </SecondaryStorySection>

      <OpinionSection>
        <SectionTitle>Opinion</SectionTitle>
        <OpinionStoryList>
          {OPINION_STORIES.map((story, index) => (
            <OpinionStoryWrapper key={story.id}>
              <OpinionStory key={story.id} {...story} />
            </OpinionStoryWrapper>
          ))}
        </OpinionStoryList>
      </OpinionSection>

      <AdvertisementSection>
        <Advertisement />
      </AdvertisementSection>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: grid;
  gap: 48px;
  grid-template-areas:
    'main-story'
    'secondary-stories'
    'opinion-stories'
    'advertisement';
  margin-block-end: 48px;

  @media ${QUERIES.tabletAndUp} {
    gap: 48px 0px;
    grid-template-areas:
      'main-story secondary-stories'
      'advertisement advertisement'
      'opinion-stories opinion-stories';
    grid-template-columns: 2fr 1fr;
  }

  @media ${QUERIES.laptopAndUp} {
    gap: 0px;
    grid-template-areas:
      'main-story secondary-stories opinion-stories'
      'main-story advertisement advertisement';
    grid-template-columns: 5fr 4fr 3fr;
  }
`;

const MainStorySection = styled.section`
  grid-area: main-story;

  @media ${QUERIES.tabletAndUp} {
    border-right: 1px solid var(--color-gray-300);
    margin-inline-end: 16px;
    padding-inline-end: 16px;
  }
`;

const SecondaryStorySection = styled.section`
  grid-area: secondary-stories;

  @media ${QUERIES.laptopAndUp} {
    border-right: 1px solid var(--color-gray-300);
    margin-inline-end: 16px;
    padding-inline-end: 16px;
  }
`;

const StoryList = styled.div`
  display: flex;
  flex-direction: column;
`;

const VerticalStoryWrapper = styled.div`
  &:not(:last-of-type) {
    border-bottom: 1px solid var(--color-gray-300);
    margin-block-end: 16px;
    padding-block-end: 16px;
  }
`;

const OpinionStoryList = styled(StoryList)`
  @media ${QUERIES.tabletOnly} {
    flex-direction: row;
    gap: 32px;
  }
`;

const OpinionStoryWrapper = styled(VerticalStoryWrapper)`
  @media ${QUERIES.tabletOnly} {
    flex: 1;
    &:not(:last-of-type) {
      border-bottom: revert;
      margin-block-end: revert;
      padding-block-end: revert;
    }
  }
`;

const OpinionSection = styled.section`
  grid-area: opinion-stories;

  @media ${QUERIES.laptopAndUp} {
    margin-block-start: -8px;
  }
`;

const AdvertisementSection = styled.section`
  grid-area: advertisement;

  @media ${QUERIES.laptopAndUp} {
    border-top: 1px solid var(--color-gray-300);
    margin-block-start: 16px;
    padding-block-start: 16px;
  }
`;

export default MainStoryGrid;
