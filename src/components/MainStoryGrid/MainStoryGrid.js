import React from "react";
import styled from "styled-components/macro";

import { MAIN_STORY, OPINION_STORIES, SECONDARY_STORIES } from "../../data";

import SectionTitle from "../SectionTitle";
import MainStory from "../MainStory";
import SecondaryStory from "../SecondaryStory";
import OpinionStory from "../OpinionStory";
import Advertisement from "../Advertisement";
import { COLORS, QUERIES } from "../../constants";

const MainStoryGrid = () => {
  return (
    <Wrapper>
      <MainStorySection>
        <MainStory {...MAIN_STORY} />
      </MainStorySection>

      <SecondaryStorySection>
        <StoryList>
          {SECONDARY_STORIES.map((story, index) => (
            <VerticalStack key={story.id}>
              <SecondaryStory {...story} />
            </VerticalStack>
          ))}
        </StoryList>
      </SecondaryStorySection>

      <OpinionSection>
        <SectionTitle>Opinion</SectionTitle>
        <StoryList>
          {OPINION_STORIES.map((story, index) => (
            <VerticalStack key={story.id}>
              <OpinionStory {...story} withMargin={index !== 0} />
            </VerticalStack>
          ))}
        </StoryList>
      </OpinionSection>

      <AdvertisementSection>
        <Advertisement />
      </AdvertisementSection>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: grid;
  grid-template-areas:
    "main-story"
    "secondary-stories"
    "opinion-stories"
    "advertisement";
  gap: 48px;
  margin-bottom: 48px;
`;

const MainStorySection = styled.section`
  grid-area: main-story;
`;

const SecondaryStorySection = styled.section`
  grid-area: secondary-stories;
`;

const StoryList = styled.div`
  display: flex;
  flex-direction: column;

  @media ${QUERIES.tabletOnly} {
    flex-direction: row;
    justify-content: space-between;
    gap: 32px;
  }
`;

const OpinionSection = styled.section`
  grid-area: opinion-stories;
`;

const AdvertisementSection = styled.section`
  grid-area: advertisement;
`;

const VerticalStack = styled.div`
  flex: 1;
  &:not(:first-child) {
    margin-top: 16px;
    padding-top: 16px;
    border-top: 1px solid ${COLORS.gray[300]};
  }

  @media ${QUERIES.tabletOnly} {
    &:not(:first-child) {
      margin-top: 0px;
      padding-top: 0px;
      border-top: none;
    }
  }
`;

export default MainStoryGrid;
