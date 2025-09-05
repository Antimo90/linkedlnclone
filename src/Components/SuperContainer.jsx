import Profile from "../components/Profile";
import RecommendedSection from "../components/RecommendedSection";
import AnalyticsCard from "../components/AnalyticsCard";
import ActivitySection from "../components/ActivitySection";
import ExperienceSection from "../components/ExperienceSection";
import EducationSection from "../components/EducationSection";
import SkillsSection from "../components/SkillsSection";
import InterestsSection from "../components/InterestsSection";
import { Container, Row, Col } from "react-bootstrap";
import SideBarDX from "./SideBarDX";

const SuperContainer = () => {
  return (
    <>
      <Container className="mt-4 flex-grow-1">
        <Row>
          <Col md={12} lg={9} className="mx-auto">
            <Profile />
            <RecommendedSection />
            <AnalyticsCard />
            <ActivitySection />
            <ExperienceSection />
            <EducationSection />
            <SkillsSection />
            <InterestsSection />
          </Col>
          <Col className="d-none d-lg-block" lg={3}>
            <SideBarDX />
          </Col>
        </Row>
      </Container>
    </>
  );
};
export default SuperContainer;
